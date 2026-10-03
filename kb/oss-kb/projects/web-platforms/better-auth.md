---
type: OSS Project
title: Better Auth (incl. Auth.js and Lucia)
description: "MIT TypeScript auth framework launched Sept 2024 by a self-taught Ethiopian developer; it absorbed Auth.js/NextAuth (Sept 2025) after Lucia was deprecated (Mar 2025), raised a $5M seed (June 2025) and was acquired by Vercel in July 2026 — the fastest OSS-to-exit arc in the domain."
resource: https://github.com/better-auth/better-auth
tags: [identity, auth, typescript, mit, yc, acquired, vercel, agent-identity]
domain: web-platforms
license: MIT
license_history: ["MIT (2024-)"]
governance: single-vendor
steward: Vercel (acquired Better Auth, Inc., July 2026)
backing_orgs: [organizations/vercel]
metrics:
  github_stars: { value: 30158, as_of: 2026-10-03 }
  npm_weekly_downloads: { value: "4.7M+", as_of: 2026-07-07 }
  authjs_github_stars: { value: 28369, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/better-auth/better-auth
    title: Better Auth GitHub repository
  - id: tc-seed
    resource: https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/
    title: "TechCrunch: Better Auth raises $5M from Peak XV, YC (2025-06-25)"
    author: org:techcrunch
  - id: seed-blog
    resource: https://better-auth.com/blog/seed-round
    title: "Better Auth: Announcing our $5M seed round"
  - id: authjs
    resource: https://github.com/nextauthjs/next-auth/discussions/13252
    title: "GitHub: Auth.js is now part of Better Auth (2025-09-26)"
  - id: migrate
    resource: https://authjs.dev/getting-started/migrate-to-better-auth
    title: "Auth.js docs: Migrating from Auth.js to Better Auth"
  - id: lucia
    resource: https://github.com/lucia-auth/lucia
    title: "Lucia repository (deprecated; now a learning resource)"
  - id: lucia-x
    resource: https://x.com/pilcrowonpaper/status/1847975622087414177
    title: "pilcrow on X: Lucia v3 will be deprecated by March 2025"
  - id: joins-vercel
    resource: https://better-auth.com/blog/better-auth-joins-vercel
    title: "Better Auth: Better Auth is joining Vercel (2026-07-07)"
  - id: launchbase
    resource: https://launchbaseafrica.com/2026/07/09/ethiopian-founder-sells-ai-authentication-startup-to-vercel-a-year-after-5m-round/
    title: "Launch Base Africa: Ethiopian founder sells AI authentication startup to Vercel (2026-07-09)"
  - id: workos
    resource: https://workos.com/blog/vercel-acquires-better-auth-migrate-to-workos
    title: "WorkOS: Vercel acquired Better Auth — what it means"
  - id: clerk
    resource: https://clerk.com/blog/series-c
    title: "Clerk: $50M Series C from Menlo and Anthropic's Anthology Fund (Oct 2025)"
---
# Summary
Better Auth went from first commit to acquisition in about two years. Bereket Engida launched it on 28 Sept 2024 (1.0 by late Nov 2024)[^joins-vercel]; it filled the vacuum left when **Lucia v3 was deprecated (March 2025)** and turned into a learning resource[^lucia][^lucia-x]. It raised a **$5M seed from Peak XV, YC, P1 Ventures and Chapter One (25 June 2025)** at ~150K weekly downloads[^tc-seed][^seed-blog]; on **26 Sept 2025 the Auth.js (NextAuth) team handed maintenance to Better Auth** and told new projects to use Better Auth instead[^authjs][^migrate]. On **7 July 2026 Vercel acquired Better Auth** (terms undisclosed) with 4.7M+ weekly npm downloads and 850+ contributors; the library stays MIT and the team will focus on an "Agent Auth Protocol"[^joins-vercel][^launchbase]. Competitors immediately pitched migrations (WorkOS)[^workos]; the proprietary rival Clerk raised a $50M Series C around agent identity[^clerk]. Verdict: OSS thriving; business acquired.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10/11 | Better Auth 1.0 (launched 2024-09-28)[^joins-vercel] | OSS | + |
| W24 | 2025-03 | Lucia v3 deprecated; becomes a learning resource[^lucia][^lucia-x] | OSS | − (Lucia) |
| W24 | 2025-06-25 | $5M seed (Peak XV, YC)[^tc-seed] | Business | + |
| W24 | 2025-09-26 | Auth.js maintenance moves to Better Auth[^authjs] | OSS | + |
| W12 | 2025-10 | Clerk $50M Series C (agent identity) — closed-source contrast[^clerk] | Business | ± |
| W3 | 2026-07-07 | Vercel acquires Better Auth; MIT retained[^joins-vercel][^launchbase] | Business | + |
| W3 | 2026-09-30 | v1.7.7[^gh] | OSS | + |

# OSS successes
- Consolidated the fragmented JS auth ecosystem (Auth.js + Lucia's users) into one actively maintained MIT library[^authjs][^lucia].
# OSS failures / risks
- Now owned by a hosting vendor; framework-neutrality depends on Vercel's commitment[^joins-vercel][^workos].
# Business successes
- Seed-to-acquisition in ~12 months[^launchbase].
# Business failures / risks
- Hosted/enterprise monetisation never had time to prove out independently.

# By window
## W3
- Vercel acquisition[^joins-vercel].
## W6
- No notable events found (1.x releases).
## W9
- No notable events found.
## W12
- Clerk's Series C sets up "agent identity" as the new battleground[^clerk].
## W24
- Lucia deprecation, seed round, Auth.js handover[^lucia][^tc-seed][^authjs].

# Lessons
- In developer libraries, OSS consolidation happens by maintainers handing projects to the most active successor, not by forks.
- Hosting platforms (Vercel, Figma) buy the OSS building blocks their users depend on; MIT is retained to keep goodwill.

# Related
- [Vercel](/organizations/vercel.md), [Vercel acquires Better Auth event](/events/2026-07-vercel-acquires-better-auth.md), [Auth.js joins Better Auth event](/events/2025-09-authjs-joins-better-auth.md)
- [Next.js](/projects/devtools-languages/nextjs.md), [Keycloak](/projects/web-platforms/keycloak.md), [Payload](/projects/web-platforms/payload.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/better-auth/better-auth
[^tc-seed]: https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/
[^seed-blog]: https://better-auth.com/blog/seed-round
[^authjs]: https://github.com/nextauthjs/next-auth/discussions/13252
[^migrate]: https://authjs.dev/getting-started/migrate-to-better-auth
[^lucia]: https://github.com/lucia-auth/lucia
[^lucia-x]: https://x.com/pilcrowonpaper/status/1847975622087414177
[^joins-vercel]: https://better-auth.com/blog/better-auth-joins-vercel
[^launchbase]: https://launchbaseafrica.com/2026/07/09/ethiopian-founder-sells-ai-authentication-startup-to-vercel-a-year-after-5m-round/
[^workos]: https://workos.com/blog/vercel-acquires-better-auth-migrate-to-workos
[^clerk]: https://clerk.com/blog/series-c
