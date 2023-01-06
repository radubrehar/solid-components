import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",

    lib: {
      entry: "src/index.tsx",
      formats: ["cjs", "es"],
      fileName: "index",
    },
  },
});
