import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "GStepper",
      fileName: "index",
    },
  },
});
