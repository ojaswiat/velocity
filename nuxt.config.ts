import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-10-19",

    components: [
        {
            path: resolve("./app/components"),
            pathPrefix: false,
        },
    ],

    devtools: { enabled: true },

    imports: {
        dirs: [
            resolve("./lib/**/*"),
            resolve("./app/components/**"),
            resolve("./app/composables/**"),
            resolve("./app/middleware/**"),
            resolve("./app/services/**"),
            resolve("./app/stores/**"),
            resolve("./app/types/**"),
            resolve("./app/utils/**"),
        ],
    },

    // Modules
    modules: [
        "@unocss/nuxt",
        "@pinia/nuxt",
        "@nuxtjs/supabase",

        [
            "@nuxt/eslint",
            {
                config: {
                    standalone: false,
                },
            },
        ],
    ],

    // Runtime Config
    runtimeConfig: {},

    supabase: {
        // By default Supabase redirects to the login page if the user is not authenticated
        redirectOptions: {
            // Redirect to home page if the user is authenticated
            callback: "/home",
            // Exclude public pages from auth redirect
            exclude: ["/", "/privacy", "/terms"],
            // Redirect to login page if the user is not authenticated
            login: "/login",
        },
    },
});
