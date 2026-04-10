-- Allow anonymous users to submit contact forms
CREATE POLICY "Anyone can submit contact inquiries"
ON public.contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anonymous users to submit course inquiries
CREATE POLICY "Anyone can submit course inquiries"
ON public.course_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anonymous users to submit junior program applications
CREATE POLICY "Anyone can submit junior program applications"
ON public.junior_program_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anonymous users to submit one-to-one requests
CREATE POLICY "Anyone can submit one-to-one requests"
ON public.one_to_one_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anonymous users to submit trainer applications
CREATE POLICY "Anyone can submit trainer applications"
ON public.trainer_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Drop existing admin-only INSERT policies on orders and order_items
DROP POLICY IF EXISTS "Only admins can insert orders" ON public.orders;
DROP POLICY IF EXISTS "Only admins can insert order items" ON public.order_items;

-- Allow anyone to place orders (guest checkout)
CREATE POLICY "Anyone can place orders"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to add order items (guest checkout)
CREATE POLICY "Anyone can add order items"
ON public.order_items
FOR INSERT
TO anon, authenticated
WITH CHECK (true);