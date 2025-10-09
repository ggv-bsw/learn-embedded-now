-- Add Gheorghe Ghirjev as instructor for the PCB Design Fundamentals course
INSERT INTO public.course_instructors (course_id, team_member_id)
VALUES ('pcb-design-fundamentals', 1)
ON CONFLICT (course_id, team_member_id) DO NOTHING;