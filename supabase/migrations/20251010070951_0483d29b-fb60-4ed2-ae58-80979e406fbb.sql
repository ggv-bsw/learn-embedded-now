-- Create professional_packs table
CREATE TABLE public.professional_packs (
  id text PRIMARY KEY,
  title text NOT NULL,
  title_ro text,
  title_ru text,
  description text NOT NULL,
  description_ro text,
  description_ru text,
  price numeric NOT NULL,
  original_price numeric,
  duration_weeks integer NOT NULL,
  level text NOT NULL,
  courses_count integer NOT NULL DEFAULT 0,
  icon text NOT NULL DEFAULT 'BookOpen',
  discount_percentage integer,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.professional_packs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view professional packs"
ON public.professional_packs
FOR SELECT
USING (true);

CREATE POLICY "Only admins can insert professional packs"
ON public.professional_packs
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update professional packs"
ON public.professional_packs
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete professional packs"
ON public.professional_packs
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create professional_pack_courses junction table (for many-to-many relationship)
CREATE TABLE public.professional_pack_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pack_id text NOT NULL REFERENCES public.professional_packs(id) ON DELETE CASCADE,
  course_id text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(pack_id, course_id)
);

-- Enable RLS
ALTER TABLE public.professional_pack_courses ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view professional pack courses"
ON public.professional_pack_courses
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage professional pack courses"
ON public.professional_pack_courses
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Insert the 3 professional packs
INSERT INTO public.professional_packs (id, title, title_ro, title_ru, description, description_ro, description_ru, price, original_price, duration_weeks, level, courses_count, icon, discount_percentage) VALUES
('career-path-embedded-professional', 
 'Embedded Systems Professional', 
 'Profesionist în Sisteme Integrate', 
 'Профессионал встраиваемых систем',
 'Complete path from C++ fundamentals to hardware design. Includes Software Testing & Automotive QA and PCB Design courses.',
 'Traseu complet de la fundamentele C++ la designul hardware. Include cursuri de Testare Software & QA Automotive și Design PCB.',
 'Полный путь от основ C++ до проектирования оборудования. Включает курсы по тестированию ПО и автомобильной QA и дизайну печатных плат.',
 699, 927, 30, 'Advanced', 3, 'Cpu', 25),

('career-path-software-developer', 
 'Software Developer Track', 
 'Traseu Dezvoltator Software', 
 'Трек разработчика ПО',
 'Master both Python and C++ from basics to advanced concepts. Perfect foundation for software development careers.',
 'Stăpânește atât Python cât și C++ de la bază la concepte avansate. Fundație perfectă pentru cariere în dezvoltarea software.',
 'Освойте Python и C++ от основ до продвинутых концепций. Идеальная основа для карьеры в разработке программного обеспечения.',
 379, 448, 22, 'Beginner to Intermediate', 2, 'Code', 15),

('career-path-complete-bundle', 
 'Complete Engineering Bundle', 
 'Pachet Complet de Inginerie', 
 'Полный инженерный пакет',
 'Full access to all available courses. From Python basics to automotive QA and PCB design. Complete engineering education.',
 'Acces complet la toate cursurile disponibile. De la bazele Python la QA automotive și design PCB. Educație completă în inginerie.',
 'Полный доступ ко всем доступным курсам. От основ Python до автомобильной QA и проектирования печатных плат. Полное инженерное образование.',
 799, 1096, 40, 'All Levels', 4, 'BookOpen', 27);