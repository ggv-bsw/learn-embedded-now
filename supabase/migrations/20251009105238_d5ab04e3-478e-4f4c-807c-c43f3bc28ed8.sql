-- Create sequence for team_members id if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_sequences WHERE schemaname = 'public' AND sequencename = 'team_members_id_seq') THEN
    CREATE SEQUENCE public.team_members_id_seq;
    ALTER TABLE public.team_members ALTER COLUMN id SET DEFAULT nextval('team_members_id_seq');
    PERFORM setval('team_members_id_seq', COALESCE((SELECT MAX(id) FROM public.team_members), 0) + 1, false);
  END IF;
END $$;

-- Create junction table for course-instructor relationships
CREATE TABLE public.course_instructors (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id text NOT NULL,
  team_member_id integer NOT NULL REFERENCES public.team_members(id) ON DELETE CASCADE,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(course_id, team_member_id)
);

-- Enable RLS
ALTER TABLE public.course_instructors ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view course instructors"
  ON public.course_instructors
  FOR SELECT
  USING (true);

CREATE POLICY "Only admins can manage course instructors"
  ON public.course_instructors
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Migrate instructors to team_members
DO $$
DECLARE
  instructor_record RECORD;
  new_member_id INTEGER;
BEGIN
  FOR instructor_record IN 
    SELECT * FROM public.instructors 
    WHERE NOT EXISTS (
      SELECT 1 FROM public.team_members tm 
      WHERE tm.name = instructors.name
    )
  LOOP
    -- Insert into team_members and get the generated id
    INSERT INTO public.team_members (
      name, title, title_ro, title_ru, bio, bio_ro, bio_ru, 
      experience, image, rating, students, role, specialization, 
      expertise, location, specialties, created_at, updated_at
    ) VALUES (
      instructor_record.name,
      instructor_record.title,
      instructor_record.title_ro,
      instructor_record.title_ru,
      instructor_record.bio,
      instructor_record.bio_ro,
      instructor_record.bio_ru,
      instructor_record.experience,
      instructor_record.image,
      instructor_record.rating,
      instructor_record.students,
      'instructor',
      'Technical Training',
      ARRAY[]::text[],
      'Remote',
      ARRAY[]::text[],
      instructor_record.created_at,
      now()
    ) RETURNING id INTO new_member_id;
    
    -- Create course-instructor relationship
    INSERT INTO public.course_instructors (course_id, team_member_id)
    VALUES (instructor_record.course_id, new_member_id);
  END LOOP;
  
  -- Link existing team members who are also instructors
  INSERT INTO public.course_instructors (course_id, team_member_id)
  SELECT DISTINCT i.course_id, tm.id
  FROM public.instructors i
  JOIN public.team_members tm ON tm.name = i.name
  ON CONFLICT (course_id, team_member_id) DO NOTHING;
END $$;

-- Drop the instructors table
DROP TABLE public.instructors CASCADE;