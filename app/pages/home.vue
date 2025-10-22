<template>
    <div class="min-h-screen bg-gray-950 text-white">
        <!-- Main Content -->
        <div class="relative overflow-hidden">
            <!-- Decorative Background Elements -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.15),transparent_50%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)]"></div>

            <div class="relative w-full px-4 py-24">
                <!-- Welcome Section -->
                <div class="text-center mb-16">
                    <h1 class="text-5xl font-bold mb-4">
                        <span class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Welcome Back!
                        </span>
                    </h1>
                    <p class="text-xl text-gray-400">
                        You're successfully logged in
                    </p>
                </div>

                <!-- Counter Section -->
                <div class="flex justify-center">
                    <Counter />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    meta: [
        { content: "Your authenticated dashboard", name: "description" },
    ],
    title: "Home - Velocity",
});
</script>
