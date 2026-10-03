---
type: OSS Project
title: React Router / Remix
description: Shopify-backed routing library and full-stack framework; Remix v2 merged into React Router v7 (Nov 2024) and Remix 3 split off as a React-free framework (announced May 2025), with React Router v8 released June 2026.
resource: https://github.com/remix-run/react-router
tags: [javascript, react, framework, router, mit, shopify]
domain: devtools-languages
license: MIT
license_history: ["MIT (2014-)"]
governance: company-led-open-core
steward: Shopify (Remix team)
backing_orgs: []
metrics:
  github_stars: { value: 56588, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rr-gh
    resource: https://github.com/remix-run/react-router
    title: React Router GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-remix
    resource: https://en.wikipedia.org/wiki/Remix_(web_framework)
    title: "Wikipedia: Remix (web framework) / React Router"
  - id: rr-releases
    resource: https://github.com/remix-run/react-router/releases
    title: "React Router GitHub releases (7.0.0 2024-11-22; 8.0.0 2026-06-17; 8.4.0 2026-09-15; via GitHub API)"
  - id: remix-wake-up
    resource: https://remix.run/blog/wake-up-remix
    title: "Remix blog: Wake up, Remix! (2025-05-28)"
  - id: rr-governance
    resource: https://remix.run/blog/rr-governance
    title: "Remix blog: React Router Open Governance (2025-06-05)"
  - id: rr-v8
    resource: https://remix.run/blog/react-router-v8
    title: "Remix blog: React Router v8 (2026-06-17)"
  - id: remix3-beta
    resource: https://remix.run/blog/remix-3-beta-preview
    title: "Remix blog: Remix 3 Beta Preview (2026-04-30)"
  - id: remix3-rc
    resource: https://remix.run/blog/remix-3-release-candidate
    title: "Remix blog: Remix 3 Release Candidate (2026-08-31)"
---

# Summary
React Router (57k stars) is one of the most depended-upon React packages and, since 2024-11-22, also the home of Remix's framework features: React Router v7 was released as "the next major version of both React Router v6 and Remix v2", adding a Framework Mode.[^rr-gh][^rr-releases][^wiki-remix] On 2025-05-28 the team announced ("Wake up, Remix!") that Remix 3 would be a separate framework dropping the React dependency for a web-primitives component model, and on 2025-06-05 moved React Router to an open governance model.[^remix-wake-up][^rr-governance] React Router v8 followed on 2026-06-17 (8.4 by 2026-09-15), while Remix 3 reached beta preview (2026-04-30) and a release candidate (2026-08-31).[^rr-v8][^rr-releases][^remix3-beta][^remix3-rc] Backed by Shopify since 2022, it has no independent business. Verdict: OSS contested — widely used library with improved governance, but repeated rebrands/merges/splits have cost the Remix name clarity versus Next.js.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-22 | React Router v7 ships (merges Remix v2) [^rr-releases] | OSS | + |
| W24 | 2025-05-28 | Remix 3 announced: independent, React-free component model [^remix-wake-up] | OSS | mixed |
| W24 | 2025-06-05 | React Router moves to open governance [^rr-governance] | Governance | + |
| W6 | 2026-04-30 | Remix 3 beta preview [^remix3-beta] | OSS | + |
| W6 | 2026-06-17 | React Router v8 released [^rr-v8][^rr-releases] | OSS | + |
| W3 | 2026-07 → 09 | React Router 8.2–8.4 [^rr-releases] | OSS | + |
| W3 | 2026-08-31 | Remix 3 release candidate [^remix3-rc] | OSS | + |

# OSS successes
- Consolidation reduced duplication: one codebase serves library and framework users.[^wiki-remix]
- Open governance model reduces single-sponsor control.[^rr-governance]

# OSS failures / risks
- Remix brand whiplash (Remix → React Router v7 → Remix 3 without React) confuses adopters.[^remix-wake-up]
- Dependence on a single corporate sponsor (Shopify).

# Business successes
- n/a (Shopify-funded).

# Business failures / risks
- n/a.

# By window
## W3
- Remix 3 RC (2026-08-31); React Router 8.x minors.[^remix3-rc][^rr-releases]
## W6
- Remix 3 beta preview (2026-04-30); React Router v8 (2026-06-17).[^remix3-beta][^rr-v8]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- React Router v7 (2024-11-22); Remix 3 announcement (2025-05-28); open governance (2025-06-05).[^rr-releases][^remix-wake-up][^rr-governance]

# Lessons
- Merging a framework into a ubiquitous library is an effective distribution strategy, but splitting the brand back out costs mindshare.

# Related
- [React](/projects/devtools-languages/react.md), [Next.js](/projects/devtools-languages/nextjs.md), [Vite](/projects/devtools-languages/vite.md)

[^rr-gh]: React Router GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/remix-run/react-router
[^wiki-remix]: Wikipedia: Remix (web framework) / React Router — https://en.wikipedia.org/wiki/Remix_(web_framework)
[^rr-releases]: React Router GitHub releases (7.0.0 2024-11-22; 8.0.0 2026-06-17; 8.4.0 2026-09-15; via GitHub API) — https://github.com/remix-run/react-router/releases
[^remix-wake-up]: Remix blog: Wake up, Remix! (2025-05-28) — https://remix.run/blog/wake-up-remix
[^rr-governance]: Remix blog: React Router Open Governance (2025-06-05) — https://remix.run/blog/rr-governance
[^rr-v8]: Remix blog: React Router v8 (2026-06-17) — https://remix.run/blog/react-router-v8
[^remix3-beta]: Remix blog: Remix 3 Beta Preview (2026-04-30) — https://remix.run/blog/remix-3-beta-preview
[^remix3-rc]: Remix blog: Remix 3 Release Candidate (2026-08-31) — https://remix.run/blog/remix-3-release-candidate
