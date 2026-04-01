---
name: add-domain
description: Scaffold a new vertical slice domain with standard files
---

Create a new domain (vertical slice) under `apps/web/src/`. Ask the user for the domain name if not provided as an argument.

Create the following files:

1. `src/<domain>/schemas.ts` — Zod validation schemas for the domain
2. `src/<domain>/queries.ts` — TanStack Query `queryOptions` for reading data
3. `src/<domain>/mutations.ts` — Supabase mutation functions for writing data
4. `src/<domain>/hooks.ts` — React hooks wrapping queries and mutations
5. `src/<domain>/components/` — directory for domain-specific UI components

Follow the patterns established in `src/auth/` as a reference. Use `.throwOnError()` on all Supabase calls. Use `queryOptions()` factory functions.
