---
paths:
  - "apps/*/src/**"
  - "packages/ui/src/**"
---

# Frontend Rules

- Always prefer shadcn/ui components from `@workspace/ui/components/*` over raw HTML elements (e.g. use `<Button>` not `<button>`, `<Input>` not `<input>`, `<Card>` not `<div>`).
- Domain-specific components live in the domain directory, not in `packages/ui`.
- Use TanStack Form for forms, not react-hook-form. Use shadcn Field components (`Field`, `FieldLabel`, `FieldError`) for form fields.
- Use the `cn()` utility from `@workspace/ui/lib/utils` for conditional class names.
- Prefer Tailwind shorthand utilities: `size-x` over `h-x w-x`, `inset-x` over `top-x right-x bottom-x left-x`, `px-x` over `pl-x pr-x`, `my-x` over `mt-x mb-x`.
- Do not add toast/notification libraries (sonner, react-hot-toast, etc.).
