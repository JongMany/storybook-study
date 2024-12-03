import { defineConfig } from "vite";
import path from "path";
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
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
      name: "devlee-design-system",
    },
    rollupOptions: {
      // 외부 라이브러리니 빌드시 추가 X
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
