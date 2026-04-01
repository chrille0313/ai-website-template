---
name: commit
description: Stage and commit changes with good commit messages
---

Stage and commit changes using conventional commits. Split into modular, logical commits when changes span multiple concerns. Only add Co-Authored-By for Claude on major contributions, not routine changes.

## Writing good commit messages

The title describes **what** changed. The description describes **why** — the intent, motivation, or problem being solved.

Good:
```
feat(auth): add session timeout

Users were staying logged in indefinitely, which is a security
risk for shared devices. Sessions now expire after 24h of
inactivity.
```

```
fix: prevent duplicate form submissions

Clicking the submit button rapidly could create multiple records.
Disable the button while the mutation is pending.
```

Bad:
```
feat(auth): add session timeout

Added a 24h timeout to the auth session configuration
and updated the hooks to handle expiry.
```

```
fix: fix bug
```

The bad examples either restate **what** the diff already shows or say nothing useful. The description should answer "why was this change necessary?" or "what problem does this solve?" — not summarize the code changes.
