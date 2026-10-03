---
type: OSS Project
title: Deno
description: Secure-by-default JavaScript/TypeScript runtime from Node.js creator Ryan Dahl; the runtime keeps shipping (2.7–2.9 in 2026) but Deno Land Inc. hit layoffs in March 2026, shut Deploy Classic, and its JSR/Deploy bets have underdelivered.
resource: https://github.com/denoland/deno
tags: [javascript-runtime, typescript, mit, vc-backed, trademark-litigation, jsr]
domain: devtools-languages
license: MIT
license_history: ["MIT (2018-)"]
governance: single-vendor
steward: Deno Land Inc.
backing_orgs: [organizations/deno-land]
metrics:
  github_stars: { value: 108550, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: deno-gh
    resource: https://github.com/denoland/deno
    title: Deno GitHub repository (stars via GitHub API, 2026-10-03)
  - id: deno-blog
    resource: https://deno.com/blog
    title: Deno blog (release posts 2.7–2.9, Deploy GA, JSR board, Oracle updates)
    author: org:deno-land
  - id: deno-releases
    resource: https://github.com/denoland/deno/releases
    title: Deno GitHub releases (dates via GitHub API, checked 2026-10-03)
  - id: deno-company
    resource: https://deno.com/blog/the-deno-company
    title: "Deno blog: Announcing the Deno Company ($4.9M seed, 2021-03-29)"
    author: org:deno-land
  - id: deno-series-a
    resource: https://deno.com/blog/series-a
    title: "Deno blog: Deno raises $21M (Series A led by Sequoia, 2022-06-21)"
    author: org:deno-land
  - id: deno-deploy-ga
    resource: https://deno.com/blog/deno-deploy-is-ga
    title: "Deno blog: Deno Deploy is Generally Available (2026-02-03)"
    author: org:deno-land
  - id: deno-migration
    resource: https://docs.deno.com/deploy/migration_guide/
    title: "Deno docs: Deploy Classic migration guide (shutdown 2026-07-20)"
    author: org:deno-land
  - id: infoworld-dahl
    resource: https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
    title: "InfoWorld: Reports of Deno's demise 'greatly exaggerated,' Deno creator says (2025-05-28)"
  - id: bushell
    resource: https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
    title: "David Bushell: 404 Deno CEO not found (Deno's decline and layoffs)"
  - id: wesbos-x
    resource: https://x.com/wesbos/status/2034284338573894129
    title: "Wes Bos on X: confirms Deno departures were layoffs (March 2026)"
  - id: byteiota-deploy
    resource: https://byteiota.com/deno-deploy-classic-shuts-down-july-20-migrate-now/
    title: "byteiota: Deno Deploy Classic Shuts Down July 20"
  - id: deno-oracle4
    resource: https://deno.com/blog/deno-v-oracle4
    title: "Deno blog: JavaScript™ Trademark Update (June 2025)"
    author: org:deno-land
---

# Summary
Deno is a technically healthy runtime attached to a struggling company. The runtime shipped a steady cadence in 2026 — 2.7 (stabilised Temporal, Windows ARM), 2.8 (`import defer`), and 2.9 on 2026-06-25 with native desktop app packaging — and has 108k GitHub stars.[^deno-blog][^deno-releases][^deno-gh] But Deno Land Inc., which raised roughly $26M ($4.9M seed in March 2021 + $21M Sequoia-led Series A in June 2022) and has announced no raise since, laid off staff the week of 2026-03-20, shut down Deno Deploy Classic on 2026-07-20 (cutting regions from six to two), and its JSR registry never reached critical mass.[^deno-company][^deno-series-a][^bushell][^deno-migration] Its most visible community win is the still-pending petition to cancel Oracle's "JavaScript" trademark. Verdict: OSS stable, business struggling; meanwhile the two VC-backed peers (Bun, VoidZero) were bought by AI/infra companies.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-18 | TTAB dismisses Deno's fraud claim vs Oracle; genericness/abandonment claims proceed [^deno-oracle4] | Business | − |
| W24 | 2025-05-28 | Dahl rebuts "Deno's demise" reports; says MAU more than doubled since Deno 2; Deploy regions already cut from 35 to 6 [^infoworld-dahl] | Business | mixed |
| W24 | 2025-06 | javascript.tm petition at 19,550 signatures [^deno-oracle4] | OSS | + |
| W9 | 2026-02-03 | New Deno Deploy declared generally available; Deno Sandbox launched for running untrusted/LLM-generated code [^deno-deploy-ga] | Business | + |
| W9 | 2026-03-20 (week of) | Layoffs (reported by D. Bushell and Wes Bos; no official Deno statement or mainstream-press confirmation found); ~8 employees post departures [^bushell][^wesbos-x] | Business | − |
| W6 | 2026-05-22 | Deno 2.8 (`import defer`) [^deno-releases] | OSS | + |
| W6 | 2026-06-25 | Deno 2.9 (desktop apps) [^deno-releases] | OSS | + |
| W3 | 2026-07-20 | Deno Deploy Classic shut down; Queues unsupported on new platform; new Deploy runs in 2 regions (US, EU) vs 6 on Classic [^deno-migration][^byteiota-deploy] | Business | − |
| W3 | 2026-09-17 | Deno 2.9.7 [^deno-releases] | OSS | = |

# OSS successes
- Continued Node/npm compatibility and feature work (Temporal, `import defer`, desktop packaging, CSS modules).[^deno-blog]
- JSR received an independent governing board, and OpenAI, Supabase and Hono published SDKs to it.[^deno-blog]
- Fresh 2.x shipping (zero-JS pages, View Transitions).[^deno-blog]

# OSS failures / risks
- JSR adoption seen as underwhelming relative to npm alternatives.[^bushell]
- Single-vendor dependency on a shrinking company.

# Business successes
- Deno Deploy relaunch and Deno Sandbox (untrusted code execution, relevant to AI agents).[^deno-blog]

# Business failures / risks
- Layoffs in March 2026 with no clear public statement from the CEO at the time.[^bushell][^wesbos-x]
- Deploy Classic shutdown forced manual migrations and dropped Asia-Pacific regions.[^byteiota-deploy]
- No announced funding since the June 2022 Series A; database listings of a September 2026 round (e.g. The Consensus) could not be confirmed by any primary or press source.[^deno-series-a]
- Oracle trademark case drags on; final TTAB decision not expected before 2027.[^deno-oracle4]

# By window
## W3
- Deploy Classic shutdown (2026-07-20); 2.9.1–2.9.7 patch releases (to 2026-09-17).[^deno-migration][^deno-releases]
## W6
- Deno 2.8 (2026-05-22) and Deno 2.9 with desktop app packaging (2026-06-25).[^deno-releases]
## W9
- Deploy GA and Deno Sandbox (2026-02-03); Deno 2.7 (2026-02-25); layoffs (week of 2026-03-20).[^deno-deploy-ga][^deno-releases][^bushell]
## W12
- Deploy relaunch in late 2025; Deno addressed React Server Components vulnerabilities (React2Shell).[^bushell][^deno-blog]
## W24
- Oracle trademark case: fraud claim dismissed (2025-06-18), discovery from Sept 2025.[^deno-oracle4]
- Dahl's May 2025 rebuttal of decline narrative.[^infoworld-dahl]

# Lessons
- "Node done right" was not enough of a wedge once Node absorbed TypeScript stripping and Bun out-marketed on speed.
- A runtime company needs a cloud product that wins on its own merits; Deploy's reliability issues undercut the funnel.[^bushell]
- Owning a registry (JSR) is expensive and only pays off with ecosystem-wide adoption.

# Related
- [Deno Land Inc.](/organizations/deno-land.md)
- [Deno layoffs](/events/2026-03-deno-layoffs.md)
- [Node.js](/projects/devtools-languages/nodejs.md), [Bun](/projects/devtools-languages/bun.md), [npm registry](/projects/devtools-languages/npm-registry.md)

[^deno-gh]: Deno GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/denoland/deno
[^deno-blog]: Deno blog (release posts 2.7–2.9, Deploy GA, JSR board, Oracle updates) — https://deno.com/blog
[^deno-releases]: Deno GitHub releases — https://github.com/denoland/deno/releases
[^deno-company]: Deno blog: Announcing the Deno Company — https://deno.com/blog/the-deno-company
[^deno-series-a]: Deno blog: Deno raises $21M — https://deno.com/blog/series-a
[^deno-deploy-ga]: Deno blog: Deno Deploy is Generally Available — https://deno.com/blog/deno-deploy-is-ga
[^deno-migration]: Deno docs: Deploy Classic migration guide — https://docs.deno.com/deploy/migration_guide/
[^infoworld-dahl]: InfoWorld: Reports of Deno's demise greatly exaggerated — https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
[^bushell]: David Bushell: 404 Deno CEO not found (Deno's decline and layoffs) — https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
[^wesbos-x]: Wes Bos on X: confirms Deno departures were layoffs (March 2026) — https://x.com/wesbos/status/2034284338573894129
[^byteiota-deploy]: byteiota: Deno Deploy Classic Shuts Down July 20 — https://byteiota.com/deno-deploy-classic-shuts-down-july-20-migrate-now/
[^deno-oracle4]: Deno blog: JavaScript™ Trademark Update (June 2025) — https://deno.com/blog/deno-v-oracle4
