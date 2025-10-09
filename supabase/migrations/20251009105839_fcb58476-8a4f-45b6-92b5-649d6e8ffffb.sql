-- Add Ion Caruta as instructor for the C++ BSW course
INSERT INTO public.course_instructors (course_id, team_member_id)
VALUES ('cpp-bsw-beginner-to-advanced', 3)
ON CONFLICT (course_id, team_member_id) DO NOTHING;