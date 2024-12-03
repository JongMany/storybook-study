import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    viteStaticCopy({
      targets: [{ src: "src/index.css", dest: "" }],
    }),
  ],
});
