-- Remove Elena Popescu and Michael Schmidt from team_members
DELETE FROM public.team_members 
WHERE name IN ('Elena Popescu', 'Michael Schmidt');