# Web App

React SPA using Vite, TanStack Router/Query/Form, and Supabase.

## Domain Structure

Each domain lives directly under `src/`:

```
src/<domain>/
  ├── components/     # Domain-specific UI
  ├── queries.ts      # TanStack Query queries
  ├── mutations.ts    # Supabase mutation functions
  ├── hooks.ts        # React hooks
  └── schemas.ts      # Zod validation schemas
```

## Import Conventions

- `@/*` — app-local imports (e.g. `@/auth/hooks`)
- `@workspace/ui/*` — shared UI components (e.g. `@workspace/ui/components/button`)
- Import directly from source packages. Never create re-export wrapper files.
- Third-party service clients go under `src/integrations/<service>/`
