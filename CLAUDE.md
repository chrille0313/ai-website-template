# React Supabase Template

## Architecture

This is a pnpm monorepo with Turborepo:

- `apps/` — Applications
- `packages/` — Shared libraries
- `supabase/` — Supabase config, migrations, edge functions (Deno runtime, NOT a workspace package)

## Conventions

- Group feature code by domain (vertical slices), not by technology.
- Use `pnpm`, never `npm` or `yarn`.

## Commands

See `scripts` in the root `package.json` for all available commands. Use `pnpm <script>` to run them.
