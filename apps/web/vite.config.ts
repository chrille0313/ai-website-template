import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");

  return {
    server: {
      host: env.HOST,
      port: Number(env.PORT),
    },
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      // TanStack Router plugin MUST come before React
      tanstackRouter(),
      tailwindcss(),
      react(),
    ],
  };
});
