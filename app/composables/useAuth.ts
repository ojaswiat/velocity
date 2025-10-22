import type { User } from "@supabase/supabase-js";

export default function useAuth() {
    const user = useState<User | null>("auth-user", () => null);
    const supabase = useSupabase();

    const isAuthenticated = computed(() => user.value !== null && user.value !== undefined);

    async function setUser() {
        const loggedInUser = await supabase.auth.getUser();
        user.value = loggedInUser.data.user;
    }

    async function signIn() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            options: {
                redirectTo: `${window.location.origin}${CLIENT_ROUTES.HOME}`,
            },
            provider: "github",
        });

        if (error) {
            throw error;
        }

        return data;
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        user.value = null;
    }

    return {
        isAuthenticated,
        setUser,
        signIn,
        signOut,
        user,
    };
}
