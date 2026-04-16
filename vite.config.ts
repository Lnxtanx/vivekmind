import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";


export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tanstackStart(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8000,
    host: true,
  },
  optimizeDeps: {
    exclude: ["@tanstack/start-server-core"],
  },
});
