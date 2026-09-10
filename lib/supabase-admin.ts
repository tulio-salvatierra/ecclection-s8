import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client using the service role key.
// This bypasses Row Level Security entirely, so this file must NEVER be
// imported from a Client Component ("use client") — only from Server
// Components, Server Actions, or Route Handlers, where SUPABASE_SERVICE_ROLE_KEY
// (no NEXT_PUBLIC_ prefix) never gets bundled into browser JS.

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables. " +
      "Set these in .env.local (dev) and your Vercel project settings (production)."
  );
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
  auth: { persistSession: false },
});