import baseConfig from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";
import prettier from "eslint-config-prettier";

export default [
  ...baseConfig,
  ...reactConfig,
  prettier,
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.gen.ts"],
  },
];
