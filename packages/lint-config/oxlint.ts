import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "typescript",
    "unicorn",
    "oxc",
    "react",
    "react-perf",
    "jsx-a11y",
    "import",
    "node",
    "promise",
    "vitest",
  ],
  categories: {
    correctness: "error",
  },
  options: {
    typeAware: true,
  },
  rules: {},
  env: {
    builtin: true,
  },
});
