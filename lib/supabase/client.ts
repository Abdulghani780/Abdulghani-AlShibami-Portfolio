import { createClient, SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

/**
 * Returns a typed Supabase browser client if environment credentials are present.
 * Gracefully returns null if credentials are not configured, enabling zero-failure local fallback.
 */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (browserClient) {
    return browserClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  try {
    browserClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
    return browserClient;
  } catch {
    return null;
  }
}
