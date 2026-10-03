---
type: Event
title: Auth.js (NextAuth.js) handed over to Better Auth
description: "On 26 Sept 2025 the Auth.js team announced the Better Auth team would maintain Auth.js (security and urgent fixes only) and advised new projects to use Better Auth — consolidating JavaScript auth after Lucia's March 2025 deprecation."
event_kind: governance
date: 2025-09-26
window: W24
impact: mixed
projects: [projects/web-platforms/better-auth]
organizations: [organizations/vercel]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: disc
    resource: https://github.com/nextauthjs/next-auth/discussions/13252
    title: "GitHub: Auth.js is now part of Better Auth (2025-09-26)"
  - id: migrate
    resource: https://authjs.dev/getting-started/migrate-to-better-auth
    title: "Auth.js docs: Migrating to Better Auth"
  - id: lucia
    resource: https://github.com/lucia-auth/lucia
    title: "Lucia repository (deprecated)"
  - id: joins
    resource: https://better-auth.com/blog/better-auth-joins-vercel
    title: "Better Auth: joining Vercel (2026-07-07)"
---
# What happened
The Auth.js maintainers said their "pace slowed over the past year" as maintainers moved roles, and that Better Auth would maintain Auth.js for security and urgent issues; new projects should start with Better Auth, with a migration guide provided[^disc][^migrate].

# Why it matters
Auth.js/NextAuth was the default auth library for Next.js; together with Lucia's deprecation (March 2025)[^lucia], it left Better Auth as the consolidated successor in the TypeScript ecosystem — an orderly handover rather than a fork or abandonment.

# Outcome so far
Better Auth (which also controls the `auth` npm package) was acquired by Vercel on 7 July 2026[^joins]. Auth.js still receives occasional fixes (last push July 2026 per GitHub).

# Related
- [Better Auth](/projects/web-platforms/better-auth.md), [Vercel acquires Better Auth](/events/2026-07-vercel-acquires-better-auth.md), [Next.js](/projects/devtools-languages/nextjs.md)

[^disc]: https://github.com/nextauthjs/next-auth/discussions/13252
[^migrate]: https://authjs.dev/getting-started/migrate-to-better-auth
[^lucia]: https://github.com/lucia-auth/lucia
[^joins]: https://better-auth.com/blog/better-auth-joins-vercel
