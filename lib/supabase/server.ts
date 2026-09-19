import { createClient, SupabaseClient } from "@supabase/supabase-js";

let serverClient: SupabaseClient | null = null;

/**
 * Returns a typed Supabase server-side client.
 * Returns null if credentials are omitted, enabling local data fallback.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (serverClient) {
    return serverClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    serverClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    return serverClient;
  } catch {
    return null;
  }
}
