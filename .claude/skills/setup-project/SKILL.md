---
name: setup-project
description: Initialize a new project from this template
---

Set up a new project from this template:

1. Ask the user for the project name
2. Run `bash scripts/setup.sh <project-name>` to rename all references
3. Run `pnpm install` to install dependencies
4. Run `pnpm db:start` to start local Supabase (confirm Docker is running)
5. Run `pnpm db:gen-types` to generate TypeScript types
6. Verify everything works with `pnpm typecheck && pnpm build`
7. Start the dev server with `pnpm dev`
