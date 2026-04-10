-- ============================================================================
-- SUPABASE RLS POLICIES - READY TO IMPLEMENT
-- Copy and run these commands in Supabase SQL Editor
-- ============================================================================

-- Step 1: ENABLE RLS on all critical tables
-- Run these first:

ALTER TABLE course_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE meeting_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE junior_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE trainer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- Step 2: COURSE INQUIRIES - Policies
-- ============================================================================

-- Deny all by default
CREATE POLICY "course_inquiries_deny_all" ON course_inquiries FOR ALL USING (false);

-- Allow anonymous users to INSERT
CREATE POLICY "course_inquiries_allow_anon_insert" ON course_inquiries
FOR INSERT TO anon
WITH CHECK (true);

-- Allow authenticated users to SELECT their own
CREATE POLICY "course_inquiries_allow_user_select_own" ON course_inquiries
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to SELECT all
CREATE POLICY "course_inquiries_allow_admin_select_all" ON course_inquiries
FOR SELECT
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'staff'
);

-- ============================================================================
-- Step 3: MEETING REQUESTS - Policies
-- ============================================================================

CREATE POLICY "meeting_requests_deny_all" ON meeting_requests FOR ALL USING (false);

CREATE POLICY "meeting_requests_allow_anon_insert" ON meeting_requests
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "meeting_requests_allow_user_select_own" ON meeting_requests
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "meeting_requests_allow_admin_select_all" ON meeting_requests
FOR SELECT
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'staff'
);

-- ============================================================================
-- Step 4: JUNIOR INQUIRIES - Policies
-- ============================================================================

CREATE POLICY "junior_inquiries_deny_all" ON junior_inquiries FOR ALL USING (false);

CREATE POLICY "junior_inquiries_allow_anon_insert" ON junior_inquiries
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "junior_inquiries_allow_user_select_own" ON junior_inquiries
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "junior_inquiries_allow_admin_select_all" ON junior_inquiries
FOR SELECT
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'staff'
);

-- ============================================================================
-- Step 5: TRAINER APPLICATIONS - Policies
-- ============================================================================

CREATE POLICY "trainer_applications_deny_all" ON trainer_applications FOR ALL USING (false);

CREATE POLICY "trainer_applications_allow_anon_insert" ON trainer_applications
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "trainer_applications_allow_user_select_own" ON trainer_applications
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "trainer_applications_allow_admin_select_all" ON trainer_applications
FOR SELECT
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'staff'
);

-- Allow trainers to update their own applications (after approval)
CREATE POLICY "trainer_applications_allow_user_update_own" ON trainer_applications
FOR UPDATE TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- Step 6: CONTACT MESSAGES - Policies
-- ============================================================================

CREATE POLICY "contact_messages_deny_all" ON contact_messages FOR ALL USING (false);

CREATE POLICY "contact_messages_allow_anon_insert" ON contact_messages
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "contact_messages_allow_admin_select_all" ON contact_messages
FOR SELECT
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'staff'
);

-- ============================================================================
-- VERIFICATION: Run this to check RLS status after implementing policies
-- ============================================================================

SELECT
  t.tablename,
  t.rowsecurity as rls_enabled,
  COUNT(p.policyname) as policy_count,
  STRING_AGG(p.policyname, ', ' ORDER BY p.policyname) as policies
FROM
  pg_tables t
LEFT JOIN
  pg_policies p ON t.tablename = p.tablename
WHERE
  t.schemaname = 'public'
  AND t.tablename IN ('course_inquiries', 'meeting_requests', 'junior_inquiries', 'trainer_applications', 'contact_messages')
GROUP BY
  t.tablename, t.rowsecurity
ORDER BY
  t.tablename;

-- ============================================================================
-- TESTING: Query from client to verify RLS works
-- ============================================================================
-- Run from authenticated context:
SELECT * FROM course_inquiries LIMIT 1;  -- Should return only own records
SELECT * FROM meeting_requests LIMIT 1;   -- Should return only own records

-- Run from admin context:
SELECT * FROM course_inquiries LIMIT 10;  -- Should return all records
SELECT * FROM meeting_requests LIMIT 10;  -- Should return all records

-- ============================================================================
-- NOTES
-- ============================================================================
-- 1. Replace 'user_id' with the actual column name if different
-- 2. Adjust role names ('admin', 'staff') based on your auth setup
-- 3. Replace 'public.profiles' with your actual profiles table if different
-- 4. Test each policy after creation to ensure it works correctly
-- 5. Grant appropriate permissions on policies after creation
-- ============================================================================
