import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    tanstackStart({
      target: 'cloudflare-module',
    }),
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
