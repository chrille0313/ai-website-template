---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "**/tests/**"
---

# Testing Rules

- Use Vitest for unit/integration tests.
- Use React Testing Library for component tests.
- Place test files in the `tests/` directory, not alongside source files.
- Test behavior, not implementation details. Prefer `getByRole` over `getByTestId`.
- Always test error states, not just happy paths.
