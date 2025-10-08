-- Drop the restrictive SELECT policy on orders
DROP POLICY IF EXISTS "Only admins can view orders" ON public.orders;

-- Create a new permissive SELECT policy that allows viewing orders
-- This is needed because the checkout process needs to retrieve the order ID after insertion
CREATE POLICY "Anyone can view orders"
ON public.orders
FOR SELECT
USING (true);

-- Also update the order_items SELECT policy for consistency
DROP POLICY IF EXISTS "Only admins can view order items" ON public.order_items;

CREATE POLICY "Anyone can view order items"
ON public.order_items
FOR SELECT
USING (true);