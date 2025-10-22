<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-950 px-4 relative overflow-hidden">
        <!-- Decorative Background Elements -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)]"></div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-md w-full">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30 transform hover:scale-110 transition-transform duration-300">
                    <svg
                        class="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <h1 class="text-5xl font-bold text-white mb-4 tracking-tight">
                    Welcome to <span class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Velocity</span>
                </h1>
                <p class="text-xl text-gray-400">
                    Sign in to continue to your account
                </p>
            </div>

            <!-- Login Card -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-8">
                <button
                    class="group relative w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold overflow-hidden transform hover:scale-105"
                    @click="signInWithGitHub">
                    <!-- Shine effect on hover -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                    <svg
                        class="w-5 h-5 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span class="relative z-10">Continue with GitHub</span>
                </button>

                <!-- Info Text -->
                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-400">
                        Authenticate securely with your GitHub account
                    </p>
                </div>
            </div>

            <!-- Footer -->
            <p class="text-center text-sm text-gray-500 mt-8">
                By signing in, you agree to use this template responsibly
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

async function signInWithGitHub() {
    const { error } = await supabase.auth.signInWithOAuth({
        options: {
            redirectTo: `${window.location.origin}${CLIENT_ROUTES.HOME}`,
        },
        provider: "github",
    });

    if (error) {
        console.error("Error signing in:", error);
    }
}

watch(user, () => {
    if (user.value) {
        // Redirect to /home instead of default '/'
        navigateTo(CLIENT_ROUTES.HOME);
    }
}, { immediate: true });

useHead({
    meta: [
        { content: "Sign in to Velocity", name: "description" },
    ],
    title: "Login - Velocity",
});
</script>
