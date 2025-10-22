<template>
    <div class="min-h-screen bg-gray-950 text-white">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
            <!-- Background gradients -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.15),transparent_50%)]">
            </div>
            <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)]">
            </div>

            <div class="relative w-full px-4 py-24 sm:py-32">
                <div class="text-center space-y-8">
                    <!-- Main heading -->
                    <div class="space-y-6">
                        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
                            <span class="block text-white">The Fast &amp; Powerful</span>
                            <span
                                class="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Nuxt Template
                            </span>
                        </h1>
                        <p class="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-400 font-light leading-relaxed">
                            Create high-quality web applications with Velocity, the streamlined Nuxt template that makes
                            full-stack development with Nuxt and Bun intuitive. Now with Supabase authentication!
                        </p>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button
                            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
                            @click="handleGetStarted">
                            <span>Get Started</span>
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                        <a
                            href="https://github.com/ojaswiat/velocity"
                            target="_blank"
                            rel="noopener"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <span>View on GitHub</span>
                        </a>
                    </div>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500">
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            Nuxt 4
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            Bun
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            Pinia
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            Supabase
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            UnoCSS
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            TypeScript
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Counter Section -->
        <section class="relative py-24">
            <div class="w-full mx-auto px-4">
                <div class="text-center space-y-12">
                    <div class="space-y-4">
                        <h2 class="text-4xl sm:text-5xl font-bold text-white">
                            Interactive Demo
                        </h2>
                        <p class="text-lg text-gray-400">
                            A simple counter with Pinia state management
                        </p>
                    </div>

                    <div class="flex justify-center">
                        <Counter />
                    </div>
                </div>
            </div>
        </section>

        <!-- Logo Showcase Section -->
        <section class="relative py-24 border-t border-white/10">
            <div class="w-full mx-auto px-4">
                <div class="text-center space-y-12">
                    <div class="space-y-4">
                        <h2 class="text-4xl sm:text-5xl font-bold text-white">
                            Beautiful Components
                        </h2>
                        <p class="text-lg text-gray-400">
                            Pre-built components ready to use
                        </p>
                    </div>

                    <div class="flex flex-col items-center gap-8">
                        <Logo size="lg" />
                        <div class="flex items-center gap-6">
                            <Logo size="sm" />
                            <Logo size="md" />
                            <Logo size="lg" />
                        </div>
                        <Logo
                            size="md"
                            :show-text="false"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="relative py-24">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="feature in FEATURES"
                    :key="feature.title"
                    class="space-y-3">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                        <svg
                            class="w-6 h-6 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                :d="feature.iconPath"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white">
                        {{ feature.title }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();

const FEATURES = [
    {
        description: "Built with Bun, the fast all-in-one JavaScript runtime for blazing fast performance",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Lightning Fast",
    },
    {
        description: "Integrated with Supabase for GitHub OAuth authentication out of the box",
        iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Secure Auth",
    },
    {
        description: "Pre-configured with ESLint, TypeScript, and best practices for enterprise applications",
        iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
        title: "Production Ready",
    },
    {
        description: "Pinia stores with auto-imports and composition API for intuitive state management",
        iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
        title: "State Management",
    },
    {
        description: "Ready to style with UnoCSS - instant on-demand atomic CSS with zero runtime overhead",
        iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        title: "Styling Made Easy",
    },
    {
        description: "Smart auto-imports for components, composables, and utilities - write less, do more",
        iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
        title: "Auto Imports",
    },
];

function handleGetStarted() {
    if (isAuthenticated.value) {
        navigateTo(CLIENT_ROUTES.HOME);
    } else {
        navigateTo(CLIENT_ROUTES.LOGIN);
    }
}

useHead({
    meta: [
        { content: "A streamlined Nuxt template for building modern web applications using Bun and Supabase", name: "description" },
    ],
    title: "Velocity - Fast Nuxt Bun Template",
});
</script>
