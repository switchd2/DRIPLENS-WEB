-- Create verification_otps table to handle OTP code generation and verification
CREATE TABLE IF NOT EXISTS public.verification_otps (
    email TEXT PRIMARY KEY,
    code TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.verification_otps ENABLE ROW LEVEL SECURITY;

-- Add RLS policies for extra safety (service_role bypasses RLS, but standard users need control)
CREATE POLICY "Enable read access for all users" ON public.verification_otps
    FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON public.verification_otps
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update access for all users" ON public.verification_otps
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete access for all users" ON public.verification_otps
    FOR DELETE USING (true);
