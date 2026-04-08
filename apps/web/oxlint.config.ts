import baseConfig from "@workspace/lint-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [baseConfig],
  rules: {
    "react/no-children-prop": "allow",
  },
});
