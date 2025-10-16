-- Drop existing policies for cleaner setup
DROP POLICY IF EXISTS "Admins can manage user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Create more granular and explicit policies
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create audit log table for role changes
CREATE TABLE IF NOT EXISTS public.user_roles_audit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,
  user_id uuid NOT NULL,
  role app_role NOT NULL,
  changed_by uuid REFERENCES auth.users(id),
  changed_at timestamp with time zone DEFAULT now(),
  old_role app_role
);

ALTER TABLE public.user_roles_audit ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view audit logs"
ON public.user_roles_audit
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger function for audit logging
CREATE OR REPLACE FUNCTION public.log_role_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.user_roles_audit (action, user_id, role, changed_by)
    VALUES ('INSERT', NEW.user_id, NEW.role, auth.uid());
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.user_roles_audit (action, user_id, role, changed_by, old_role)
    VALUES ('UPDATE', NEW.user_id, NEW.role, auth.uid(), OLD.role);
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO public.user_roles_audit (action, user_id, role, changed_by)
    VALUES ('DELETE', OLD.user_id, OLD.role, auth.uid());
  END IF;
  RETURN NULL;
END;
$$;

-- Create trigger for audit logging
DROP TRIGGER IF EXISTS audit_role_changes ON public.user_roles;
CREATE TRIGGER audit_role_changes
AFTER INSERT OR UPDATE OR DELETE ON public.user_roles
FOR EACH ROW EXECUTE FUNCTION public.log_role_changes();

-- Add constraint to prevent duplicate roles per user
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_roles_unique 
ON public.user_roles(user_id, role);