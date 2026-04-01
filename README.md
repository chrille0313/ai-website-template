# AI Website Template

A production-ready monorepo template for building web applications with React, Vite, TanStack Router, TanStack Query, shadcn/ui, and Supabase.

## Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite** — build tooling with HMR
- **TanStack Router** — type-safe file-based routing with auto code splitting
- **TanStack Query** — server state management and caching
- **shadcn/ui** — accessible UI components built on Radix UI + Tailwind CSS v4
- **Supabase** — auth, database, edge functions
- **Zod** — schema validation
- **Turborepo** — monorepo task orchestration with caching
- **ESLint** + **Prettier** — linting and formatting

## Quick Start

1. Click **"Use this template"** on GitHub to create a new repository
2. Clone your new repository
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy the environment example and add your private credentials:
   ```bash
   cp apps/web/.env.local.example apps/web/.env.local
   ```
   Public variables are already in `apps/web/.env` (committed). Private/secret variables go in `.env.local` (gitignored).
5. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── apps/
│   └── web/                    # Main React application
│       └── src/
│           ├── auth/           # Auth domain (vertical slice)
│           │   ├── components/ # Login/signup forms
│           │   ├── queries.ts  # TanStack Query queries
│           │   ├── mutations.ts# TanStack Query mutations
│           │   ├── hooks.ts    # React hooks
│           │   └── schemas.ts  # Zod validation schemas
│           ├── integrations/   # Third-party service clients
│           │   └── supabase/   # Supabase client + types
│           ├── lib/            # Shared utilities
│           └── routes/         # File-based routes (TanStack Router)
├── packages/
│   ├── ui/                     # Shared shadcn/ui components
│   └── eslint-config/          # Shared ESLint configuration
├── supabase/                   # Supabase config, migrations, edge functions
└── turbo.json                  # Turborepo pipeline config
```

### Vertical Slice Architecture

Feature code is organized by domain, not by technology. Each domain gets its own directory directly under `src/`:

```
src/auth/
  ├── components/     # Domain-specific UI components
  ├── queries.ts      # TanStack Query queries
  ├── mutations.ts    # TanStack Query mutations
  ├── hooks.ts        # React hooks
  └── schemas.ts      # Zod schemas
```

## Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `pnpm dev`          | Start development server                       |
| `pnpm build`        | Production build                               |
| `pnpm typecheck`    | TypeScript type checking                       |
| `pnpm lint`         | ESLint                                         |
| `pnpm format`       | Format with Prettier                           |
| `pnpm format:check` | Check formatting                               |
| `pnpm test`         | Run tests                                      |
| `pnpm db:start`     | Start local Supabase                           |
| `pnpm db:stop`      | Stop local Supabase                            |
| `pnpm db:reset`     | Reset local database                           |
| `pnpm db:gen-types` | Generate TypeScript types from Supabase schema |

## Key Patterns

### Adding a New Domain

Create a new directory under `src/` with the standard files:

```
src/todos/
  ├── components/
  │   └── todo-list.tsx
  ├── queries.ts      # queryOptions for fetching
  ├── mutations.ts    # Supabase mutation functions
  ├── hooks.ts        # useQuery/useMutation wrappers
  └── schemas.ts      # Zod schemas for validation
```

### Adding a Route

Create a file in `src/routes/`. The TanStack Router plugin auto-generates the route tree:

- `src/routes/todos.tsx` — public route at `/todos`
- `src/routes/_authenticated/settings.tsx` — protected route at `/settings`

### Adding a shadcn Component

```bash
cd packages/ui
pnpm dlx shadcn@latest add dialog
```

Then import in your app code:

```tsx
import { Dialog } from "@repo/ui/components/dialog";
```

### Supabase Queries with TanStack Query

Always use `.throwOnError()` so TanStack Query can catch errors:

```ts
export function todosQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false })
        .throwOnError();
      return data;
    },
  });
}
```

### Protected Routes

Any route under `src/routes/_authenticated/` is automatically protected. The auth guard redirects unauthenticated users to `/login`.

## Supabase Setup

### Local Development

```bash
# Start local Supabase (requires Docker)
pnpm db:start

# Create a migration
cd supabase
npx supabase migration new my_migration

# Reset database (runs migrations + seed)
pnpm db:reset

# Generate TypeScript types
pnpm db:gen-types
```

### Edge Functions

Edge functions live in `supabase/functions/` and run on the Deno runtime. They have their own tooling separate from the Node.js workspace.

## Deployment

- **Frontend**: Deploy `apps/web` to Vercel, Netlify, or Cloudflare Pages
- **Backend**: Use Supabase hosted (supabase.com) for production
