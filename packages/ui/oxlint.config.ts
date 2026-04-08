import baseConfig from "@workspace/lint-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [baseConfig],
  rules: {
    "typescript/no-redundant-type-constituents": "allow",
    "react/no-children-prop": "allow",
    "jsx-a11y/anchor-has-content": "allow",
    "jsx-a11y/click-events-have-key-events": "allow",
    "jsx-a11y/no-redundant-roles": "allow",
    "jsx-a11y/prefer-tag-over-role": "allow",
    "jsx-a11y/role-has-required-aria-props": "allow",
  },
});
