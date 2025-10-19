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
            resolve("./app/libs/**/*"),
            resolve("./app/services/**"),
            resolve("./app/stores/**"),
            resolve("./app/components/**"),
            resolve("./app/middleware/**"),
            resolve("./app/utils/**"),
        ],
    },

    // Modules
    modules: [
        "@unocss/nuxt",
        "@pinia/nuxt",

        [
            "@nuxt/eslint",
            {
                config: {
                    standalone: false,
                },
            },
        ],
    ],
});
