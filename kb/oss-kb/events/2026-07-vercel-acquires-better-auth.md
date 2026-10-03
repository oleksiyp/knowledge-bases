---
type: Event
title: "Vercel acquires Better Auth"
description: "On 2026-07-07 Vercel acquired Better Auth, the MIT-licensed TypeScript authentication library (~4.7M weekly npm downloads), keeping it free and MIT and refocusing the team on identity for AI agents."
event_kind: acquisition
date: 2026-07-07
window: W3
impact: mixed
projects: [projects/devtools-languages/nextjs, projects/web-platforms/better-auth]
organizations: [organizations/vercel]
tags: [web, authentication, acquisition, typescript, mit]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vercel-better-auth
    resource: https://vercel.com/blog/vercel-acquires-better-auth
    title: "Vercel blog: Vercel acquires Better Auth (2026-07-07)"
    author: org:vercel
  - id: dealroom-better-auth
    resource: https://dealroom.co/news/137900-vercel-acquires-better-auth-a-year-after-ethiopian-founders-5m-seed/
    title: "Dealroom: Vercel acquires Better Auth, a year after Ethiopian founder's seed (2026-07)"
  - id: wp-ba-joins
    resource: https://better-auth.com/blog/better-auth-joins-vercel
    title: "Better Auth: Better Auth is joining Vercel (2026-07-07)"
  - id: wp-authjs
    resource: https://github.com/nextauthjs/next-auth/discussions/13252
    title: "GitHub: Auth.js is now part of Better Auth (2025-09-26)"
  - id: wp-tc-seed
    resource: https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/
    title: "TechCrunch: Better Auth raises $5M from Peak XV, YC (2025-06-25)"
  - id: wp-workos
    resource: https://workos.com/blog/vercel-acquires-better-auth-migrate-to-workos
    title: "WorkOS: Vercel acquired Better Auth — what it means and how to migrate"

---

# What happened
On 7 July 2026 Vercel announced it had acquired Better Auth, an open source TypeScript authentication library. Vercel said the library "stays free and MIT licensed" as the team builds identity for the agent era[^vercel-better-auth]. Founder Bereket Engida and the core team joined Vercel. At the time the library reportedly had about 4.7M weekly npm downloads and 850+ contributors. Terms were not disclosed[^dealroom-better-auth].

# Why it matters
This continues Vercel's run of buying popular framework-layer OSS (Tremor, NuxtLabs in 2025) to feed its hosting business. It also extends Vercel into agent identity, meaning revocable credentials for autonomous agents. Competitors such as WorkOS answered by publishing migration guides.

# Outcome so far
Better Auth remains MIT-licensed under the same name, as of 2026-10-03.

# Related
- [Vercel](/organizations/vercel.md), [Next.js](/projects/devtools-languages/nextjs.md), [Vercel acquires NuxtLabs](/events/2025-07-vercel-acquires-nuxtlabs.md)

[^vercel-better-auth]: Vercel blog, 2026-07-07.
[^dealroom-better-auth]: Dealroom, July 2026.

## Additional notes (web-platforms)
- Better Auth's own post confirms the 7 July 2026 date and says the project launched on 28 Sept 2024 and reached 1.0 by late Nov 2024; the stated post-deal focus is an "Agent Auth Protocol" and keeping auth "open source, framework and platform agnostic"[^wp-ba-joins].
- Context: Better Auth raised a $5M seed from Peak XV and YC in June 2025[^wp-tc-seed] and took over maintenance of Auth.js/NextAuth on 26 Sept 2025[^wp-authjs], so the deal hands Vercel stewardship of the main successor to NextAuth. WorkOS immediately published a migration pitch[^wp-workos].
- See [Better Auth](/projects/web-platforms/better-auth.md) and the [Auth.js handover](/events/2025-09-authjs-joins-better-auth.md).

[^wp-ba-joins]: https://better-auth.com/blog/better-auth-joins-vercel
[^wp-authjs]: https://github.com/nextauthjs/next-auth/discussions/13252
[^wp-tc-seed]: https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/
[^wp-workos]: https://workos.com/blog/vercel-acquires-better-auth-migrate-to-workos
