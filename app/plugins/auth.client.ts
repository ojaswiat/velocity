export default defineNuxtPlugin(async () => {
    const { setUser } = useAuth();
    const supabase = useSupabase();

    // Check for existing session on app load
    await setUser();

    // Listen to auth state changes (login, logout, token refresh, etc.)
    supabase.auth.onAuthStateChange(() => {
        // Update user state whenever auth state changes
        setUser();
    });
});
