import { defineConfig, globalIgnores } from "eslint/config";
import baseConfig from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";
import prettier from "eslint-config-prettier";

export default defineConfig([
  ...baseConfig,
  ...reactConfig,
  prettier,
  globalIgnores(["**/dist/**", "**/*.gen.ts"]),
]);
