import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

// Global singleton instance
let supabaseInstance: SupabaseClient | null = null;

export default function useSupabase() {
    // Only create instance once
    if (!supabaseInstance) {
        const config = useRuntimeConfig();
        const { supabaseKey, supabaseURL } = config.public;

        supabaseInstance = createClient(supabaseURL, supabaseKey, {
            auth: {
                autoRefreshToken: true,
                detectSessionInUrl: true,
                persistSession: true,
            },
        });
    }

    return supabaseInstance;
}
