---
type: OSS Project
title: Turborepo
description: Vercel-owned, MIT-licensed Rust monorepo task runner for JS/TS; quietly healthy — a steady 2.x minor every ~3 months (2.4 → 2.11 through Sept 2026) with large AI-assisted performance gains — while its creator Jared Palmer left Vercel in Oct 2025; its business value lies in driving Vercel Remote Cache adoption.
resource: https://github.com/vercel/turborepo
tags: [monorepo, build-system, javascript, rust, mit, vercel, single-vendor]
domain: devtools-languages
license: MIT
license_history: ["MPL-2.0 (2021-2024)", "MIT (Turborepo 2.0, June 2024-)"]
governance: single-vendor
steward: Vercel
backing_orgs: [organizations/vercel]
metrics:
  github_stars: { value: 31164, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: turbo-gh
    resource: https://github.com/vercel/turborepo
    title: vercel/turborepo GitHub repository (stars via GitHub API, 2026-10-03)
  - id: turbo-blog
    resource: https://turborepo.dev/blog
    title: Turborepo blog (release posts 2.4–2.11)
    author: org:vercel
  - id: turbo-26
    resource: https://turborepo.dev/blog/turbo-2-6
    title: "Turborepo 2.6"
    author: org:vercel
  - id: vercel-turbo-96
    resource: https://vercel.com/blog/making-turborepo-ninety-six-percent-faster-with-agents-sandboxes-and-humans
    title: "Vercel blog: Making Turborepo 96% faster with agents, sandboxes, and humans"
    author: org:vercel
  - id: vercel-acq-turbo
    resource: https://vercel.com/blog/vercel-acquires-turborepo
    title: "Vercel acquires Turborepo"
    author: org:vercel
  - id: syntax-palmer
    resource: https://syntax.fm/show/953/why-v0-creator-left-vercel-to-fix-github-goat-jared-palmer
    title: "Syntax #953: Why v0 creator left Vercel to fix GitHub (Jared Palmer)"
  - id: turbo-20
    resource: https://daily.dev/posts/turborepo-2-0-rznpk9krg
    title: "daily.dev: Turborepo 2.0 (MIT license update)"
---

# Summary
Turborepo, acquired by Vercel in December 2021, is the Vercel-side half of the JavaScript monorepo duopoly with Nx.[^vercel-acq-turbo] Over the last two years it has been unglamorous but healthy: eight minor releases from 2.4 (2025-01-31) to 2.11 (2026-09-18), adding sidecar tasks, microfrontends, Bun support, Git worktrees and an "Agent Skill", and 2.9 (2026-03) made task-graph computation 81–91% faster — with Vercel publicly crediting AI agents working under close human direction.[^turbo-blog][^vercel-turbo-96] Its creator Jared Palmer (who later ran Vercel AI/v0) left Vercel for GitHub/Microsoft CoreAI in October 2025, removing the project's founding figure but with no visible impact on cadence.[^syntax-palmer][^turbo-blog] There is no standalone business: Turborepo exists to feed Vercel Remote Cache and the Vercel platform. Verdict: OSS stable; business n/a (Vercel strategic asset).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-31 | Turborepo 2.4: experimental boundaries [^turbo-blog] | OSS | + |
| W24 | 2025-04-03 | 2.5: sidecar tasks [^turbo-blog] | OSS | + |
| W12 | 2025-10 | Creator Jared Palmer leaves Vercel for GitHub / Microsoft CoreAI [^syntax-palmer] | Governance | − |
| W12 | 2025-10-28 | 2.6: microfrontends, Bun support stable [^turbo-26] | OSS | + |
| W12 | 2025-12-19 | 2.7: devtools, composable configuration [^turbo-blog] | OSS | + |
| W9 | 2026-01-26 | 2.8: Git worktrees, Agent Skill, AI-enabled docs [^turbo-blog] | OSS | + |
| W9 | 2026-03-25 | 2.9: up to 96% faster; agent-assisted profiling work [^turbo-blog][^vercel-turbo-96] | OSS | + |
| W6 | 2026-06-24 | 2.10: graceful shutdown, better filtering [^turbo-blog] | OSS | + |
| W3 | 2026-09-18 | 2.11: native language support, more package managers [^turbo-blog] | OSS | + |

# OSS successes
- Steady quarterly minors, ~31k stars, relicensed from MPL-2.0 to the more permissive MIT with Turborepo 2.0 (2024) — the opposite direction of most 2024 relicensings.[^turbo-gh][^turbo-20]
- A well-documented case of AI agents accelerating performance work in a Rust codebase.[^vercel-turbo-96]

# OSS failures / risks
- Single-vendor governance; roadmap tied to Vercel priorities (e.g., microfrontends on Vercel).[^turbo-26]
- Founder departure (Oct 2025).[^syntax-palmer]

# Business successes
- Drives adoption of Vercel Remote Cache and the Vercel platform (see [Next.js](/projects/devtools-languages/nextjs.md) for Vercel's finances).[^vercel-acq-turbo]

# Business failures / risks
- No independent revenue; the project's fate depends on Vercel's continued strategic interest.

# By window
## W3
- Turborepo 2.11 (2026-09-18).[^turbo-blog]
## W6
- Turborepo 2.10 (2026-06-24).[^turbo-blog]
## W9
- 2.8 (agent features) and 2.9 (96% faster).[^turbo-blog][^vercel-turbo-96]
## W12
- Jared Palmer departs; 2.6 and 2.7.[^syntax-palmer][^turbo-26]
## W24
- 2.4 and 2.5.[^turbo-blog]

# Lessons
- Acquired developer tools can stay healthy when they are a funnel for the acquirer's paid platform rather than a profit center.
- "Agents + human review + good profiling data" is emerging as a real pattern for performance work.

# Related
- [Vercel](/organizations/vercel.md)
- [Nx](/projects/devtools-languages/nx.md)
- [Next.js](/projects/devtools-languages/nextjs.md)
- [GitHub](/projects/devtools-languages/github.md)

[^turbo-gh]: vercel/turborepo GitHub repository
[^turbo-blog]: Turborepo blog
[^turbo-26]: Turborepo 2.6
[^vercel-turbo-96]: Vercel blog: Making Turborepo 96% faster
[^vercel-acq-turbo]: Vercel acquires Turborepo
[^syntax-palmer]: Syntax #953: Jared Palmer
[^turbo-20]: daily.dev: Turborepo 2.0
