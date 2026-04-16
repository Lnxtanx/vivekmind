import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    tanstackStart(),
    cloudflare(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8000,
    host: true,
  },
});
