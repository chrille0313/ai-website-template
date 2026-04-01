import { defineConfig, globalIgnores } from "eslint/config";
import baseConfig from "@workspace/eslint-config/base";
import reactConfig from "@workspace/eslint-config/react";
import prettier from "eslint-config-prettier";

export default defineConfig([
  ...baseConfig,
  ...reactConfig,
  prettier,
  globalIgnores(["**/dist/**", "**/*.gen.ts"]),
]);
