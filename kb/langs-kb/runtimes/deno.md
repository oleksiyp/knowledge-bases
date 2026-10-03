---
type: Runtime
title: Deno
description: Ryan Dahl's secure-by-default, TypeScript-first JavaScript runtime (V8 + Rust + Tokio); it set the agenda for runtime design in 2020–2022 but had to reverse its "no npm, no node_modules" stance in Deno 2 (2024), and by 2026 is a technically healthy niche runtime attached to a shrinking company.
tags: [javascript, typescript, v8, rust, permissions, jsr, edge]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
ideas:
  - ideas/platforms-and-portability/js-runtime-competition
  - ideas/types/types-as-comments-and-type-stripping
  - ideas/platforms-and-portability/edge-isolates
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/tooling-and-ecosystem/integrated-toolchains
runtimes: [runtimes/v8]
first_released: 2020
steward: Deno Land Inc.
governance: single-vendor
trajectory: niche
adoption_signals:
  state_of_js_runtime_usage_pct: { value: 11, as_of: 2025 }
  github_stars: { value: 108561, as_of: 2026-10-03 }
era_momentum: { E1: up, E2: up, E3: flat, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: deno-gh
    resource: https://github.com/denoland/deno
    title: "Deno GitHub repository (stars via GitHub API, 2026-10-03)"
  - id: infoworld-10
    resource: https://www.infoworld.com/article/2257997/deno-10-arrives-to-challenge-nodejs.html
    title: "InfoWorld: Deno 1.0 arrives to challenge Node.js (2020-05)"
  - id: deno-company
    resource: https://deno.com/blog/the-deno-company
    title: "Deno blog: Announcing the Deno Company ($4.9M seed, 2021-03-29)"
    author: org:deno-land
  - id: deno-series-a
    resource: https://deno.com/blog/series-a
    title: "Deno blog: Deno raises $21M (Series A led by Sequoia, 2022-06-21)"
    author: org:deno-land
  - id: deploy-beta1
    resource: https://deno.com/blog/deploy-beta1
    title: "Deno blog: Deno Deploy Beta 1 (2021-06)"
    author: org:deno-land
  - id: deno-128
    resource: https://deno.com/blog/v1.28
    title: "Deno blog: Deno 1.28 — Featuring 1.3 Million New Modules (npm specifiers stable, 2022-11)"
    author: org:deno-land
  - id: jsr-beta
    resource: https://deno.com/blog/jsr_open_beta
    title: "Deno blog: Introducing JSR — the JavaScript Registry (2024-03-01)"
    author: org:deno-land
  - id: deno-2
    resource: https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
    title: "The New Stack: Deno 2 arrives with long-term support, npm compatibility (2024-10)"
  - id: deno-greatly
    resource: https://deno.com/blog/greatly-exaggerated
    title: "Deno blog: Reports of Deno's demise have been greatly exaggerated (2025-05)"
    author: org:deno-land
  - id: infoworld-dahl
    resource: https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
    title: "InfoWorld: Reports of Deno's demise 'greatly exaggerated,' Deno creator says (2025-05-28)"
  - id: deno-deploy-ga
    resource: https://deno.com/blog/deno-deploy-is-ga
    title: "Deno blog: Deno Deploy is Generally Available (2026-02-03)"
    author: org:deno-land
  - id: bushell
    resource: https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
    title: "David Bushell: Deno's decline and layoffs (2026-03-20)"
  - id: deno-migration
    resource: https://docs.deno.com/deploy/migration_guide/
    title: "Deno docs: Deploy Classic migration guide (shutdown 2026-07-20)"
    author: org:deno-land
  - id: deno-releases
    resource: https://github.com/denoland/deno/releases
    title: "Deno GitHub releases (2.7 Feb 2026, 2.8 May 2026, 2.9 Jun 2026)"
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (runtimes: Node 90%, Bun 21%, Deno 11%)"
  - id: deno-oracle4
    resource: https://deno.com/blog/deno-v-oracle4
    title: "Deno blog: JavaScript trademark update (June 2025)"
    author: org:deno-land
---

# Summary
Deno won the argument and lost the market. Launched as 1.0 on 2020-05-13 by Node.js creator Ryan Dahl, it bet on permissions-by-default, TypeScript out of the box, URL imports with no `node_modules`, web-standard APIs and a single binary with built-in formatter, linter and test runner.[^infoworld-10] Nearly every one of those ideas was later adopted by Node or Bun — but Deno's purist bet on *not* being npm-compatible cost it the ecosystem. It added npm specifiers (1.28, Nov 2022) and then, with Deno 2 (Oct 2024), full `package.json`/`node_modules` support: a public reversal of its founding thesis.[^deno-128][^deno-2] The company raised about $26M (2021 seed, 2022 Sequoia-led Series A), built Deno Deploy and the JSR registry, then laid off staff in March 2026 and shut Deploy Classic in July 2026.[^deno-company][^deno-series-a][^bushell][^deno-migration] State of JS 2025 puts Deno at 11% runtime usage versus Bun's 21%.[^infoq-sojs] Verdict: **influential but niche**; the runtime keeps shipping (2.9, June 2026) and has 108k stars.[^deno-releases][^deno-gh]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-05-13 | Deno 1.0 ([event](/events/2020-05-deno-1-0.md))[^infoworld-10] | + |
| E2 | 2021-03-29 | Deno Land Inc. formed with a $4.9M seed[^deno-company] | + |
| E2 | 2021-06 | Deno Deploy beta: V8 isolates at the edge[^deploy-beta1] | + |
| E2 | 2022-06-21 | $21M Series A led by Sequoia[^deno-series-a] | + |
| E3 | 2022-11 | Deno 1.28 stabilises `npm:` specifiers — first retreat from "no npm"[^deno-128] | mixed |
| E3 | 2024-03-01 | JSR, a TypeScript-first, ESM-only registry, enters public beta[^jsr-beta] | mixed |
| E4 | 2024-10 | Deno 2.0: `package.json`, `node_modules`, `deno install`, LTS[^deno-2] | mixed |
| E4 | 2024-11 | Deno petitions USPTO to cancel Oracle's "JavaScript" trademark[^deno-oracle4] | + |
| E4 | 2025-05 | Dahl rebuts "Deno's demise" reports; Deploy regions already cut from 35 to 6[^deno-greatly][^infoworld-dahl] | − |
| E4 | 2026-02-03 | New Deno Deploy GA plus Deno Sandbox for untrusted/LLM code[^deno-deploy-ga] | + |
| E4 | 2026-03 | Layoffs ([event](/events/2026-03-deno-layoffs.md))[^bushell] | − |
| E4 | 2026-07-20 | Deploy Classic shut down; new Deploy runs in 2 regions[^deno-migration] | − |

# Ideas it bet on
| Idea | Outcome for Deno |
|---|---|
| Permissions by default (`--allow-net` etc.) | Copied by Node (permission model); rarely decisive for adoption |
| [TypeScript without a build step](/ideas/types/types-as-comments-and-type-stripping.md) | Validated — Node and Bun followed, eroding Deno's edge |
| URL imports, no `node_modules` | Failed — reversed in 1.28 and Deno 2 |
| [All-in-one toolchain](/ideas/tooling-and-ecosystem/integrated-toolchains.md) | Validated, but Bun executed it faster |
| [Edge isolates (Deno Deploy)](/ideas/platforms-and-portability/edge-isolates.md) | Mixed — Deploy shrank from 35 to 6 to 2 regions |
| [Web-standard APIs / WinterTC](/ideas/platforms-and-portability/js-runtime-competition.md) | Succeeded as a standard; little competitive advantage |
| JSR registry | Underdelivered relative to npm[^bushell] |

# What succeeded
- **Agenda-setting.** Deno 1.0's critique (security, TS, web APIs, built-in tooling) became the design brief for the whole server-JS ecosystem; Node's 2022–2025 feature list reads like Deno's 2020 README.[^infoworld-10]
- **Deno 2 compatibility** made migration realistic; Dahl said monthly active users more than doubled after it.[^infoworld-dahl]
- **Standards work**: Deno was among the runtimes behind WinterCG, which became Ecma TC55 ([event](/events/2025-01-wintertc-ecma-tc55.md)), and led the push to free the "JavaScript" name from Oracle.[^deno-oracle4]
- **Engineering quality**: steady releases through 2026 (Temporal, `import defer`, desktop packaging).[^deno-releases]

# What failed or stalled
- **Ecosystem purity.** Requiring code written for Deno, with URL imports, meant npm's millions of packages were second-class until late 2022, by which time Bun was arriving with full compatibility.[^deno-128]
- **Business model.** Deploy never became a large platform; regions were cut, Classic shut down, and staff laid off in March 2026 with no announced funding since 2022.[^infoworld-dahl][^deno-migration][^bushell]
- **JSR** won board governance and some SDK publishers, but not critical mass.[^bushell]
- **Differentiation erosion.** Once Node shipped type stripping and permissions, "Node done right" was no longer a wedge.

# By era
## E1
Deno 1.0 (May 2020): Rust + V8 + Tokio, a single binary, permissions, TypeScript compiled internally. Large hype; usage small.[^infoworld-10]
## E2
Company formed, Deploy beta, Fresh framework, Series A. Peak momentum and mindshare.[^deno-company][^deploy-beta1][^deno-series-a]
## E3
The pivot to compatibility: npm specifiers (Nov 2022), `node:` built-ins, JSR (Mar 2024). Bun 1.0 took the "fast new runtime" story.[^deno-128][^jsr-beta]
## E4
Deno 2 (Oct 2024), the Oracle trademark petition, Deploy shrinkage, new Deploy GA plus Sandbox (Feb 2026), layoffs (Mar 2026), Classic shutdown (Jul 2026).[^deno-2][^deno-deploy-ga][^bushell][^deno-migration]

# Lessons
- Being right about design is not enough if adopting you means leaving the ecosystem; compatibility should come first, not as a retreat.
- Challengers' best ideas get absorbed by incumbents; the challenger needs an advantage that cannot be copied in a release cycle.
- A VC-funded runtime needs a hosted product that wins on its own; Deploy did not.

# Related
- [Node.js](/runtimes/nodejs.md), [Bun](/runtimes/bun.md), [V8](/runtimes/v8.md), [workerd](/runtimes/workerd-isolates.md)
- [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [WinterTC forms as Ecma TC55](/events/2025-01-wintertc-ecma-tc55.md)

[^deno-gh]: Deno GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/denoland/deno
[^infoworld-10]: InfoWorld: Deno 1.0 arrives to challenge Node.js — https://www.infoworld.com/article/2257997/deno-10-arrives-to-challenge-nodejs.html
[^deno-company]: Deno blog: Announcing the Deno Company — https://deno.com/blog/the-deno-company
[^deno-series-a]: Deno blog: Deno raises $21M — https://deno.com/blog/series-a
[^deploy-beta1]: Deno blog: Deno Deploy Beta 1 — https://deno.com/blog/deploy-beta1
[^deno-128]: Deno blog: Deno 1.28 — https://deno.com/blog/v1.28
[^jsr-beta]: Deno blog: Introducing JSR — https://deno.com/blog/jsr_open_beta
[^deno-2]: The New Stack: Deno 2 arrives with long-term support, npm compatibility — https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
[^deno-greatly]: Deno blog: Reports of Deno's demise have been greatly exaggerated — https://deno.com/blog/greatly-exaggerated
[^infoworld-dahl]: InfoWorld: Reports of Deno's demise greatly exaggerated — https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
[^deno-deploy-ga]: Deno blog: Deno Deploy is Generally Available — https://deno.com/blog/deno-deploy-is-ga
[^bushell]: David Bushell: Deno's decline and layoffs — https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
[^deno-migration]: Deno docs: Deploy Classic migration guide — https://docs.deno.com/deploy/migration_guide/
[^deno-releases]: Deno GitHub releases — https://github.com/denoland/deno/releases
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
[^deno-oracle4]: Deno blog: JavaScript trademark update — https://deno.com/blog/deno-v-oracle4
