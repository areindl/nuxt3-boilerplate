// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  dir: {
    pages: "views",
  },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode", "@nuxt/icon"],

  /* Module Configuration */
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  icon: {
    serverBundle: {
      collections: ["tabler"], // <!--- this
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
})
