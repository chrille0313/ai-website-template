# React Supabase Template

## Architecture

This is a pnpm monorepo with Turborepo. The structure is:

- `apps/web` — React SPA (Vite, TanStack Router/Query/Form)
- `packages/ui` — Shared shadcn/ui components
- `packages/eslint-config` — Shared ESLint configuration
- `supabase/` — Supabase config, migrations, edge functions (Deno runtime, NOT a workspace package)

## Vertical Slice Architecture

Feature code is grouped by domain directly under `src/`, not by technology. Each domain has:

```
src/<domain>/
  ├── components/     # Domain-specific UI
  ├── queries.ts      # TanStack Query queries (queryOptions)
  ├── mutations.ts    # Supabase mutation functions
  ├── hooks.ts        # React hooks (useQuery/useMutation wrappers)
  └── schemas.ts      # Zod validation schemas
```

Never split by technology (e.g. `src/components/auth/`, `src/hooks/useAuth.ts`).

## Import Conventions

- `@workspace/ui/*` — shared UI components from packages/ui (e.g. `@workspace/ui/components/button`)
- `@/*` — app-local imports from apps/web/src (e.g. `@/auth/hooks`)
- Import directly from source packages. Never create re-export wrapper files.
- Third-party service clients go under `src/integrations/<service>/`

## Key Patterns

- **Forms**: Use TanStack Form with Zod validators and shadcn Field components. See `src/auth/components/` for examples.
- **Supabase queries**: Always use `.throwOnError()` so TanStack Query catches errors.
- **Auth state**: `staleTime: Infinity` + `onAuthStateChange` listener in `src/auth/hooks.ts`.
- **Protected routes**: Place under `src/routes/_authenticated/`. The layout route has a `beforeLoad` guard.
- **Env vars**: Validated with T3 Env in `src/env.ts` using strict mode (`runtimeEnvStrict`).
- **Error handling**: Root route has `errorComponent` and `notFoundComponent`. Never leak error details in production.

## Do NOT

- Add toast/notification libraries (sonner, react-hot-toast, etc.)
- Create re-export files that just forward imports from another package
- Put domain code in a `features/` wrapper directory
- Use `npm` or `yarn` — always use `pnpm`
- Commit `.env.local` files
- Use `baseUrl` in tsconfig (deprecated in TS 6)

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm typecheck` — TypeScript checking
- `pnpm lint` — ESLint
- `pnpm format` — Prettier
- `pnpm test` — Vitest
- `pnpm db:start` / `pnpm db:stop` — local Supabase
- `pnpm db:gen-types` — regenerate Supabase types
- `pnpm db:reset` — reset local database

## Commit Messages

Use conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `perf:`, `ci:`, `style:`. Scopes are optional (e.g. `feat(auth): add password reset`).
