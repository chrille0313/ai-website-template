---
paths:
  - "supabase/**"
  - "apps/web/src/integrations/supabase/**"
  - "apps/web/src/**/queries.ts"
  - "apps/web/src/**/mutations.ts"
---

# Database & Supabase Rules

- Enable RLS on ALL public tables. No exceptions.
- Use `auth.uid()` wrapped in a subquery for RLS policies: `(SELECT auth.uid()) = user_id`.
- Add indexes on columns used in RLS policies.
- Always use `.throwOnError()` on Supabase client calls used with TanStack Query.
- Separate queries (read) from mutations (write) into `queries.ts` and `mutations.ts`.
- Generated types live at `src/integrations/supabase/types.gen.ts`. Regenerate with `pnpm db:gen-types`.
- Edge functions use the Deno runtime. They have separate linting and testing from the Node.js workspace.
- Create migrations with `cd supabase && npx supabase migration new <name>`.
- The Supabase client singleton is at `src/integrations/supabase/client.ts`. Never create additional clients.
