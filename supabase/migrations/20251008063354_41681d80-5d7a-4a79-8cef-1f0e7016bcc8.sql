-- Restore secure RLS policies for orders and order_items
-- Remove the public access policies

DROP POLICY IF EXISTS "Anyone can view orders" ON public.orders;
DROP POLICY IF EXISTS "Anyone can view order items" ON public.order_items;
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON public.order_items;

-- Create admin-only policies for viewing
CREATE POLICY "Only admins can view orders"
ON public.orders
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can view order items"
ON public.order_items
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));