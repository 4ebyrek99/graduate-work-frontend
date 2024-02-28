// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-primevue",
        "@pinia/nuxt",
        "@nuxtjs/i18n"
    ],
    primevue: {
        cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    },
    css: ["primevue/resources/themes/aura-light-green/theme.css"],
    imports: {
        autoImport: false
    },
    nitro: {
        compressPublicAssets: {
            brotli: true
        }
    },
    runtimeConfig: {
        serverApiIp: "",
        performanceLogs: 1,
        public: {
            apiHost: "", // can be overwritten by NUXT_PUBLIC_API_HOST
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ru"
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },
    i18n: {
        vueI18n: "./i18n.config.js"
    }
})
