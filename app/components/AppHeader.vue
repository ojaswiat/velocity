<template>
    <header class="border-b border-white/10 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-16">
        <nav class="w-full px-4 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo - Left Side -->
                <NuxtLink
                    :to="CLIENT_ROUTES.INDEX"
                    class="flex items-center gap-3 group cursor-pointer no-underline">
                    <Logo />
                </NuxtLink>

                <!-- Auth Button - Right Side -->
                <div>
                    <button
                        v-if="!isAuthenticated"
                        class="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 font-semibold transform hover:scale-105"
                        @click="goToLogin">
                        Log In
                    </button>
                    <button
                        v-else
                        class="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 font-semibold transform hover:scale-105"
                        @click="handleLogout">
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const route = useRoute();

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const isAuthenticated = computed(() => user.value !== null);

function goToLogin() {
    navigateTo(CLIENT_ROUTES.LOGIN);
}

async function handleLogout() {
    await supabase.auth.signOut();
    if (route.path !== CLIENT_ROUTES.INDEX) {
        navigateTo(CLIENT_ROUTES.LOGIN);
    }
}
</script>
