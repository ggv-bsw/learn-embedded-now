-- Add INSERT policies for orders and order_items tables
-- These policies ensure orders can only be created by admins or via the secure edge function (service role)

-- Policy for orders table: Only admins can insert orders directly
-- Note: The edge function uses service role which bypasses RLS, so this is for direct database access only
CREATE POLICY "Only admins can insert orders"
ON orders
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Policy for order_items table: Only admins can insert order items directly
-- Note: The edge function uses service role which bypasses RLS
CREATE POLICY "Only admins can insert order items"
ON order_items
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));