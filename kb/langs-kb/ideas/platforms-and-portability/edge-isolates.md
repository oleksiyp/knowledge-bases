---
type: Idea
title: Edge isolates (V8 isolates as the serverless unit)
description: Run many tenants' JS/Wasm in lightweight V8 isolates in every point of presence instead of containers or VMs. Cloudflare Workers made it a growing business (7.4M developers by mid-2026), but "render everything at the edge" failed. Vercel reverted edge rendering in 2024 and deprecated Edge Functions in 2025, and Deno Deploy shrank from 35 regions to 2.
area: platforms-and-portability
tags: [cloudflare-workers, v8-isolates, workerd, deno-deploy, vercel, edge-computing, serverless, wintertc]
outcome: mixed
maturity_2026: adopted
origin_year: 2017
mainstream_year: 2020
languages: [languages/javascript, languages/typescript, languages/python, languages/rust]
runtimes: [runtimes/workerd-isolates, runtimes/v8, runtimes/deno, runtimes/nodejs]
related_ideas: [ideas/platforms-and-portability/js-runtime-competition, ideas/platforms-and-portability/server-side-wasm, ideas/runtime-performance/startup-snapshotting, ideas/platforms-and-portability/wasi-and-component-model]
era_momentum: { E1: up, E2: up, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cf-isolates
    resource: https://blog.cloudflare.com/cloud-computing-without-containers/
    title: "Cloudflare blog: Cloud Computing without Containers (isolates rationale, 2018)"
    author: org:cloudflare
  - id: cf-workerd
    resource: https://blog.cloudflare.com/workerd-open-source-workers-runtime/
    title: "Cloudflare blog: Introducing workerd, the open-source Workers runtime (2022-09-27)"
    author: org:cloudflare
  - id: cf-q2-2026
    resource: https://finance.yahoo.com/markets/stocks/articles/cloudflare-q2-earnings-call-highlights-200354624.html
    title: "Yahoo Finance: Cloudflare Q2 2026 earnings call highlights (Workers >7.4M developers)"
  - id: cf-containers
    resource: https://blog.cloudflare.com/containers-are-available-in-public-beta-for-simple-global-and-programmable/
    title: "Cloudflare blog: Containers are available in public beta (2025-06-24)"
    author: org:cloudflare
  - id: leerob-revert
    resource: https://x.com/leerob/status/1780705942734331983
    title: "Lee Robinson on X: Vercel reverted all edge rendering back to Node.js (2024-04)"
  - id: rauchg-edge
    resource: https://x.com/rauchg/status/1780737746275045717
    title: "Guillermo Rauch on X: 'We've run the experiment. Edge rendering doesn't work' (2024-04)"
  - id: vercel-edge-deprecated
    resource: https://vercel.com/docs/functions/runtimes/edge/edge-functions.rsc
    title: "Vercel docs: Edge Functions (Deprecated)"
    author: org:vercel
  - id: vercel-unify
    resource: https://vercel.com/changelog/edge-middleware-and-edge-functions-are-now-powered-by-vercel-functions
    title: "Vercel changelog: Edge Middleware and Edge Functions are now powered by Vercel Functions (2025)"
    author: org:vercel
  - id: infoworld-dahl
    resource: https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
    title: "InfoWorld: Reports of Deno's demise 'greatly exaggerated' (2025-05-28; Deploy regions cut 35 → 6)"
  - id: deno-migration
    resource: https://docs.deno.com/deploy/migration_guide/
    title: "Deno docs: Deploy Classic migration guide (shutdown 2026-07-20; 2 regions)"
    author: org:deno-land
  - id: devclass-fermyon
    resource: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
    title: "DevClass: Akamai buys Fermyon — a possible answer to Cloudflare Workers (2025-12-04)"
---

# Summary
**Mixed: isolates won as a platform primitive, and "the edge" lost as a rendering location.** Cloudflare Workers, launched in 2017 on V8 isolates, grew into a large developer platform. Cloudflare reported that **nearly 2 million developers joined in Q2 2026 alone, taking the total above 7.4 million**, more than the 1.5 million added in all of 2025.[^cf-q2-2026] Cloudflare open-sourced the runtime as `workerd` in Sept 2022.[^cf-workerd] The broader industry bet, that pages should be server-rendered in every PoP close to users, did not hold up. In April 2024 Vercel "reverted all edge rendering back to Node.js", and its CEO wrote: "We've run the experiment. Edge rendering doesn't work."[^leerob-revert][^rauchg-edge] Vercel deprecated Edge Functions in 2025 in favour of regional Node.js "Fluid compute".[^vercel-edge-deprecated][^vercel-unify] Deno Deploy cut its regions from 35 to 6 by 2025 and to 2 after Deploy Classic shut down in July 2026.[^infoworld-dahl][^deno-migration] Cloudflare itself added containers in 2025 for workloads that isolates cannot handle.[^cf-containers]

# The idea
A V8 isolate is a separate JS heap that starts in milliseconds and costs a few MB. A single process can host thousands of tenants, which removes per-request cold starts and lets code run in every data centre. Cloudflare argued in 2018 that this gave "cloud computing without containers".[^cf-isolates] The constraints are no full Node API (originally), tight CPU and memory limits, and JS/Wasm only. Those constraints pushed the WinterCG/WinterTC effort to define a common "minimum web-interoperable runtime" API across Workers, Deno, Vercel Edge and Node (see [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | Workers adds KV, Durable Objects (2020) and Wasm support; isolate model promoted [^cf-isolates] | + |
| E2 | 2021 | Deno Deploy launches (35 regions at peak); Netlify Edge Functions built on Deno | + |
| E2 | 2022 | Vercel Edge Functions; "edge-first" Next.js App Router messaging | + |
| E2/E3 | 2022-09-27 | Cloudflare open-sources workerd ([event](/events/2022-09-workerd-open-sourced.md)) [^cf-workerd] | + |
| E3 | 2024-04 | Vercel reverts edge rendering to Node.js; "edge rendering doesn't work" [^leerob-revert][^rauchg-edge] | − |
| E4 | 2025 | Vercel Edge Functions deprecated; Fluid compute [^vercel-edge-deprecated][^vercel-unify] | − |
| E4 | 2025-05 | Deno Deploy regions down to 6 [^infoworld-dahl] | − |
| E4 | 2025-06-24 | Cloudflare Containers public beta alongside Workers [^cf-containers] | mixed |
| E4 | 2025-12 | Akamai buys Fermyon to answer Cloudflare Workers ([event](/events/2025-12-akamai-acquires-fermyon.md)) [^devclass-fermyon] | + |
| E4 | 2026-07-20 | Deno Deploy Classic shut down; new Deploy runs in 2 regions [^deno-migration] | − |
| E4 | 2026-08 | Cloudflare: Workers above 7.4M developers [^cf-q2-2026] | + |

# Where it succeeded
- **Cloudflare Workers** became a full platform (storage, queues, Durable Objects, AI inference, agents). Its developer growth accelerated in 2026.[^cf-q2-2026]
- **Middleware-shaped workloads**: auth, redirects, A/B tests, header rewriting and API gateways, which are short and stateless and benefit from proximity to users.
- **Multi-tenant density** made generous free tiers possible, which in turn drove developer adoption.
- **Competitive validation**: Akamai explicitly bought Fermyon to respond to Workers.[^devclass-fermyon]

# Where it failed or stalled
- **Edge SSR / "render at the edge"**: most apps' data lives in one region, so rendering near users and then calling a distant database *added* latency. Vercel found Node in a region was faster and had better developer experience.[^leerob-revert]
- **Restricted runtimes**: missing Node APIs and CPU limits broke npm packages. Vercel's answer was full Node in regions,[^vercel-unify] and Cloudflare's was Node compatibility work plus containers.[^cf-containers]
- **Smaller players retreated**: Deno Deploy's region cuts and Classic shutdown.[^infoworld-dahl][^deno-migration]

# Why
1. **Data gravity.** Compute near the user only helps if the data is there as well. Cloudflare tackled this with Durable Objects, D1 and caching, while frameworks that just moved rendering did not.
2. **Compatibility beat purity.** The npm ecosystem assumes Node. Restricted edge runtimes created constant friction, and the market rewarded whoever closed the gap fastest, whether through Node-compatible Workers or regional Node.
3. **Owning the network.** Cloudflare owns PoPs and could price isolates profitably. Vercel and Deno resold capacity, so an edge-everywhere strategy was a cost with no differentiation.[^infoworld-dahl]
4. **Isolates are a good fit for AI agents and untrusted code.** Cheap, fast, sandboxed execution suited the 2025–2026 wave of agent workloads, which helps explain Workers' growth acceleration.[^cf-q2-2026]

# Lessons
- An execution primitive (isolates) can win even when the architectural pattern marketed with it (edge rendering) fails.
- Latency claims need measurement against where the data lives. Vercel publicly correcting itself is a rare and useful data point.[^leerob-revert]

# Related
- [workerd / Cloudflare Workers](/runtimes/workerd-isolates.md), [V8](/runtimes/v8.md), [Deno](/runtimes/deno.md), [Node.js](/runtimes/nodejs.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md)

[^cf-isolates]: Cloudflare blog: Cloud Computing without Containers — https://blog.cloudflare.com/cloud-computing-without-containers/
[^cf-workerd]: Cloudflare blog: Introducing workerd — https://blog.cloudflare.com/workerd-open-source-workers-runtime/
[^cf-q2-2026]: Yahoo Finance: Cloudflare Q2 2026 earnings call highlights — https://finance.yahoo.com/markets/stocks/articles/cloudflare-q2-earnings-call-highlights-200354624.html
[^cf-containers]: Cloudflare blog: Containers are available in public beta — https://blog.cloudflare.com/containers-are-available-in-public-beta-for-simple-global-and-programmable/
[^leerob-revert]: Lee Robinson on X — https://x.com/leerob/status/1780705942734331983
[^rauchg-edge]: Guillermo Rauch on X — https://x.com/rauchg/status/1780737746275045717
[^vercel-edge-deprecated]: Vercel docs: Edge Functions (Deprecated) — https://vercel.com/docs/functions/runtimes/edge/edge-functions.rsc
[^vercel-unify]: Vercel changelog: Edge Middleware and Edge Functions now powered by Vercel Functions — https://vercel.com/changelog/edge-middleware-and-edge-functions-are-now-powered-by-vercel-functions
[^infoworld-dahl]: InfoWorld: Reports of Deno's demise greatly exaggerated — https://www.infoworld.com/article/3997318/reports-of-denos-demise-greatly-exaggerated-deno-creator-says.html
[^deno-migration]: Deno docs: Deploy Classic migration guide — https://docs.deno.com/deploy/migration_guide/
[^devclass-fermyon]: DevClass: Akamai buys Fermyon — https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
