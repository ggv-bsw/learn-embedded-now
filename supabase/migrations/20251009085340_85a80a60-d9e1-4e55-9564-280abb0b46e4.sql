-- Create team_members table
CREATE TABLE public.team_members (
  id integer PRIMARY KEY,
  name text NOT NULL,
  title text NOT NULL,
  role text NOT NULL,
  specialization text NOT NULL,
  expertise text[] NOT NULL DEFAULT '{}',
  experience text NOT NULL,
  rating numeric NOT NULL DEFAULT 0,
  students integer NOT NULL DEFAULT 0,
  location text NOT NULL,
  image text NOT NULL,
  linkedin text,
  bio text NOT NULL,
  specialties text[] NOT NULL DEFAULT '{}',
  
  -- Romanian translations
  title_ro text,
  role_ro text,
  specialization_ro text,
  expertise_ro text[],
  location_ro text,
  bio_ro text,
  specialties_ro text[],
  
  -- Russian translations
  title_ru text,
  role_ru text,
  specialization_ru text,
  expertise_ru text[],
  location_ru text,
  bio_ru text,
  specialties_ru text[],
  
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (team info is public)
CREATE POLICY "Anyone can view team members"
  ON public.team_members
  FOR SELECT
  USING (true);

-- Create policy for admin write access
CREATE POLICY "Only admins can insert team members"
  ON public.team_members
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update team members"
  ON public.team_members
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete team members"
  ON public.team_members
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing team data
INSERT INTO public.team_members (
  id, name, title, role, specialization, expertise, experience, 
  rating, students, location, image, linkedin, bio, specialties
) VALUES 
(
  1,
  'Gheorghe Ghirjev',
  'Senior Embedded Systems Engineer',
  'Software Engineer',
  'Embedded Systems Architecture',
  ARRAY['Embedded C', 'RTOS', 'Automotive Systems'],
  '11+ years',
  4.9,
  73,
  'Chisinau, Moldova',
  'https://media.licdn.com/dms/image/v2/D4D03AQE24yuQ44-tyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710442325881?e=1760572800&v=beta&t=Pa3Q0lZMhfd4UcAVVVly92_0E8xkJ4LlR3IG3u5zOsI',
  'https://www.linkedin.com/in/gheorghe-ghirjev/',
  'Senior embedded systems engineer with extensive experience in automotive and IoT industries. Specialized in real-time operating systems and low-level programming. Passionate about teaching complex embedded concepts in an accessible way.',
  ARRAY['Embedded Systems', 'Automotive ECU', 'RTOS', 'C/C++', 'Hardware Design']
),
(
  2,
  'Daniel Vrabii',
  'Lead Data Engineer',
  'Data Engineer',
  'Python, ML & Database',
  ARRAY['Big Data', 'Machine Learning', 'Cloud Platforms'],
  '6+ years',
  4.8,
  85,
  'Bucharest, Romania',
  'https://media.licdn.com/dms/image/v2/D4D03AQGUSWvS2qP-uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683970542550?e=1760572800&v=beta&t=moGAvhHQ2niXRAQbN6HexdK_f88-usja1e0j3FZ_moI',
  'https://www.linkedin.com/in/daniel-vrabii-8910549b/',
  'Data engineering expert with strong background in machine learning and distributed systems. Has built scalable data pipelines for multiple Fortune 500 companies. Enjoys transforming complex data concepts into practical learning experiences.',
  ARRAY['Apache Spark', 'Python', 'Machine Learning', 'AWS', 'Data Pipelines']
),
(
  3,
  'Ion Caruta',
  'Senior QA Engineer',
  'Quality Assurance',
  'System Test & PLC',
  ARRAY['Test Automation', 'PLC Programming', 'Validation'],
  '6+ years',
  4.7,
  70,
  'Iasi, Romania',
  'https://media.licdn.com/dms/image/v2/C4D03AQHdK61fz_ef5g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653324813413?e=1762387200&v=beta&t=vRirkPDgVaJSt83gi9yxVWJNEgDTcMcQnAHyMrTGkZQ',
  'https://www.linkedin.com/in/ion-caruta-0ab374216/',
  'Quality assurance specialist with extensive experience in industrial automation and system testing. Expert in PLC programming and test automation frameworks. Dedicated to teaching robust testing methodologies for embedded systems.',
  ARRAY['Test Automation', 'PLC Programming', 'System Validation', 'Python', 'Industrial IoT']
),
(
  4,
  'Grigore Ciobanu',
  'Senior Software Engineer',
  'Software Engineer',
  'C++ with Linux & IoT',
  ARRAY['Linux Systems', 'IoT Protocols', 'Network Programming'],
  '8+ years',
  4.8,
  75,
  'Chisinau, Moldova',
  'https://media.licdn.com/dms/image/v2/D4D03AQEi63NbK8JmZQ/profile-displayphoto-scale_400_400/B4DZfk_n5PGYAs-/0/1751893574038?e=1762387200&v=beta&t=eh1mbV9h0ydwq7toFdLv00x3PFkAIGyKDrnh-rQHiGI',
  'https://www.linkedin.com/in/grigore-ciobanu/',
  'Linux and IoT specialist with deep expertise in network programming and embedded Linux systems. Has contributed to numerous open-source projects and enjoys mentoring developers in system-level programming.',
  ARRAY['Linux Kernel', 'C++', 'IoT Protocols', 'Network Programming', 'Embedded Linux']
);