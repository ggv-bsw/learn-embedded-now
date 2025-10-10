-- Harden PII tables: remove public INSERT and restrict to admins (service role bypasses RLS)

-- course_inquiries
alter table public.course_inquiries enable row level security;
drop policy if exists "Allow public course inquiry submissions" on public.course_inquiries;
create policy "Admins can insert course inquiries"
  on public.course_inquiries
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

-- contact_inquiries
alter table public.contact_inquiries enable row level security;
drop policy if exists "Anyone can submit contact inquiry" on public.contact_inquiries;
create policy "Admins can insert contact inquiries"
  on public.contact_inquiries
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

-- one_to_one_requests
alter table public.one_to_one_requests enable row level security;
drop policy if exists "Anyone can submit one-to-one request" on public.one_to_one_requests;
create policy "Admins can insert one-to-one requests"
  on public.one_to_one_requests
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

-- junior_program_applications
alter table public.junior_program_applications enable row level security;
drop policy if exists "Allow public junior program submissions" on public.junior_program_applications;
create policy "Admins can insert junior program applications"
  on public.junior_program_applications
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

-- trainer_applications
alter table public.trainer_applications enable row level security;
drop policy if exists "Anyone can submit trainer application" on public.trainer_applications;
create policy "Admins can insert trainer applications"
  on public.trainer_applications
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));
