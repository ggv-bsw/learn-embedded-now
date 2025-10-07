-- Create orders table
CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  total_price numeric(10, 2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'cancelled'))
);

-- Create order_items table
CREATE TABLE public.order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_image text,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric(10, 2) NOT NULL,
  total_price numeric(10, 2) NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for orders
CREATE POLICY "Anyone can create orders"
  ON public.orders
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can view orders"
  ON public.orders
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update orders"
  ON public.orders
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'))
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete orders"
  ON public.orders
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Create policies for order_items
CREATE POLICY "Anyone can create order items"
  ON public.order_items
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can view order items"
  ON public.order_items
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update order items"
  ON public.order_items
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'))
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete order items"
  ON public.order_items
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Create index for faster order lookups
CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_created_at ON public.orders(created_at DESC);