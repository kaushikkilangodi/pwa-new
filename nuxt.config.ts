import process from "node:process";

const sw = process.env.SW === "true";

export default defineNuxtConfig({
  // ssr: false,
  // typescript,
  modules: ["@vite-pwa/nuxt", "@pinia/nuxt"],
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  pwa: {
    strategies: sw ? "injectManifest" : "generateSW",
    srcDir: sw ? "service-worker" : undefined,
    filename: sw ? "sw.ts" : undefined,
    registerType: "autoUpdate",
    manifest: {
      name: "Nuxt 3 ToDo List",
      short_name: "ToDoList",
      description: "A simple to-do list application built with Nuxt 3 ",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait-primary",
      start_url: "/",
      icons: [
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
      screenshots: [
        {
          src: "images/img1.png",
          sizes: "640x480",
          type: "image/png",
          label: "Home Screen",
          form_factor: "narrow",
        },
        {
          src: "images/img2.png",
          sizes: "640x480",
          type: "image/png",
          label: "Features Page",
          form_factor: "wide",
        },
        {
          src: "images/img3.png",
          sizes: "640x480",
          type: "image/png",
          label: "Features Page",
          form_factor: "narrow",
        },
        {
          src: "images/img4.png",
          sizes: "640x480",
          type: "image/png",
          label: "Features Page",
          form_factor: "wide",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600, // 1 hour for production, 20 seconds for testing
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});
