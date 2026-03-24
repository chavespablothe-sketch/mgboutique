-- Create contact_messages table for storing contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  dates_interest TEXT,
  message TEXT NOT NULL,
  honeypot TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form, no auth required)
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);