import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "web/assets",
    emptyOutDir: false,
    assetsDir: "",
    rollupOptions: {
      input: {
        app: "src/css/app.css",
        "nav-bar": "templates/UI-elements/nav-bar.js",
        "berichten-toggle": "templates/UI-elements/berichten-toggle.js",
        "product-carousel": "templates/UI-elements/product-carousel.js",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "app.css",
      },
    },
  },
});
