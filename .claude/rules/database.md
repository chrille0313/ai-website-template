---
paths:
  - "supabase/**"
  - "apps/*/src/integrations/supabase/**"
  - "apps/*/src/**/queries.ts"
  - "apps/*/src/**/mutations.ts"
---

# Database & Supabase Rules

- Enable RLS on ALL public tables. No exceptions.
- Use `auth.uid()` wrapped in a subquery for RLS policies: `(SELECT auth.uid()) = user_id`.
- Add indexes on columns used in RLS policies.
- Prefer `.throwOnError()` on Supabase calls when available. Otherwise, check for errors and throw manually.
- Separate queries (read) from mutations (write) — see the vertical slice pattern in CLAUDE.md.
- Create migrations with `cd supabase && npx supabase migration new <name>`.
- Never create additional Supabase clients. Use the existing singleton.
- Edge functions run on Deno, not Node. They have separate linting, testing, and dependencies from the rest of the monorepo.
