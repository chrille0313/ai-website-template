---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "apps/web/tests/**"
---

# Testing Rules

- Use Vitest for unit/integration tests.
- Use React Testing Library for component tests.
- Place test files alongside source files as `<name>.test.ts(x)`.
- Test setup is at `apps/web/tests/setup.ts`.
- Run tests with `pnpm test`. Watch mode with `pnpm --filter web test:watch`.
- Test behavior, not implementation details. Prefer `getByRole` over `getByTestId`.
- Always test error states, not just happy paths.
