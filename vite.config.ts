import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],

  base: "/Tugas2_Rekayasa_Perangkat_Lunak/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
