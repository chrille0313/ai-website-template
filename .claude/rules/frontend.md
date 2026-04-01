---
paths:
  - "apps/web/src/**"
  - "packages/ui/src/**"
---

# Frontend Rules

- Use functional components only. No class components.
- Use TanStack Form for forms, not react-hook-form.
- Use shadcn Field components (`Field`, `FieldLabel`, `FieldError`) for form fields.
- Use `queryOptions()` factory functions to co-locate query keys and functions.
- Use `useSuspenseQuery` in components when data must be available before render.
- Devtools integrations live in `src/integrations/tanstack-devtools/`, `src/integrations/tanstack-query/`, `src/integrations/tanstack-router/`.
- Shared UI components come from `@workspace/ui/components/*`. Domain-specific components live in the domain directory.
- Icons come from `lucide-react`.
- Use the `cn()` utility from `@workspace/ui/lib/utils` for conditional class names.
