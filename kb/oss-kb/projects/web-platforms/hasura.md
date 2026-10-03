---
type: OSS Project
title: Hasura GraphQL Engine
description: "Former unicorn GraphQL-over-Postgres engine; v2 (Apache-2.0) is in LTS wind-down while v3/DDN moved to a proprietary control plane, and in June 2025 the company pivoted to the PromptQL AI data agent — prompting downstream users like Nhost to build their own Hasura-compatible engine (June 2026)."
resource: https://github.com/hasura/graphql-engine
tags: [baas, graphql, postgres, apache-2.0, pivot, ai, open-core]
domain: web-platforms
license: Apache-2.0 (v2 engine and v3 engine); DDN control plane, CLI and console proprietary
license_history: ["Apache-2.0 (v1/v2 CE)", "v3/DDN (2024-): Apache-2.0 data plane + proprietary control plane"]
governance: single-vendor
steward: Hasura, Inc. (PromptQL)
backing_orgs: [organizations/hasura]
metrics:
  github_stars: { value: 32131, as_of: 2026-10-03 }
  latest_v2_release: { value: "v2.50.3", as_of: 2026-09-09 }
oss_verdict: declining
business_verdict: struggling
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/hasura/graphql-engine
    title: Hasura graphql-engine repository
  - id: promptql
    resource: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
    title: "Hasura blog (Tanmai Gopal): From GraphQL to PromptQL — a new chapter begins (2025-06-02)"
  - id: v3oss
    resource: https://hasura.io/blog/announcing-open-source-hasura-graphql-engine-v3
    title: "Hasura: Announcing open source Hasura GraphQL Engine v3"
  - id: v3disc
    resource: https://github.com/hasura/graphql-engine/discussions/10556
    title: "GitHub discussion: Is Hasura v3 / DDN OSS?"
  - id: lts
    resource: https://hasura.io/legal/support-policy-hasura-v2
    title: "Hasura: Support policy for Hasura v2 (LTS)"
  - id: fortune
    resource: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
    title: "Fortune: AI engineers deployed as consultants at $900/hour (2025-09-14)"
  - id: nhost
    resource: https://nhost.io/blog/introducing-constellation
    title: "Nhost: Constellation — Hasura-compatible GraphQL in Go (2026-06-03)"
  - id: nhost-dev
    resource: https://dev.to/max4nhost/we-built-an-open-source-graphql-engine-to-replace-hasura-56l
    title: "DEV: We built an open-source GraphQL engine to replace Hasura (Nhost)"
---
# Summary
Hasura is the domain's clearest "OSS darling to pivot" story. The v2 Community Edition (Apache-2.0) powered countless Postgres GraphQL backends, but v3/DDN split into an open engine plus a **proprietary control plane, CLI and console**[^v3oss][^v3disc]. On **2 June 2025** co-founder Tanmai Gopal announced **PromptQL** as "the spiritual successor to GraphQL for the age of AI"; Hasura GraphQL Engine and DDN are to be "hosted and maintained" but are no longer the strategic focus[^promptql]. PromptQL sold forward-deployed AI engineers to enterprises at ~$900/hour (Fortune, Sept 2025)[^fortune]. v2 is in an LTS regime (v2.50 LTS; final LTS gets 3 years)[^lts][^gh]. Downstream, **Nhost shipped Constellation (3 June 2026)**, an open Go reimplementation of Hasura CE, because "v2 is winding down … and v3 does not follow the same open-source model"[^nhost]. Verdict: OSS declining; business struggling/pivoting (no new round since 2022 per public data).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-02 | Pivot to PromptQL announced[^promptql] | Business | ± |
| W24 | 2025-09-14 | PromptQL forward-deployed engineers at $900/h (Fortune)[^fortune] | Business | + |
| W6 | 2026-06-03 | Nhost releases Constellation to replace Hasura v2[^nhost] | OSS | − |
| W3 | 2026-07/09 | v2.50 LTS line (v2.50.3, 9 Sept 2026)[^lts][^gh] | OSS | ± |

# OSS successes
- v2 still maintained with long LTS windows[^lts]; v3 engine open (Apache-2.0)[^v3oss].
# OSS failures / risks
- Usable v3 requires proprietary tooling[^v3disc]; community forks/reimplementations emerge[^nhost][^nhost-dev].
# Business successes
- Early AI-agent enterprise revenue claims (seven-figure deals per Fortune)[^fortune].
# Business failures / risks
- Unicorn valuation (2022) vs. pivot; employee reviews cite frequent direction changes (not independently verified).

# By window
## W3
- v2.50 LTS releases[^gh].
## W6
- Nhost Constellation[^nhost].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- PromptQL pivot[^promptql]; Fortune coverage[^fortune].

# Lessons
- Moving the control plane closed while keeping the engine "open" is functionally a relicense for users — and invites compatible reimplementations.
- The 2021-era API-generation category was hit hard by LLM codegen; vendors pivoted to agents.

# Related
- [Hasura (org)](/organizations/hasura.md), [Hasura PromptQL pivot event](/events/2025-06-hasura-promptql-pivot.md)
- [Nhost](/projects/web-platforms/nhost.md), [Supabase](/projects/databases/supabase.md), [Appwrite](/projects/web-platforms/appwrite.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/hasura/graphql-engine
[^promptql]: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
[^v3oss]: https://hasura.io/blog/announcing-open-source-hasura-graphql-engine-v3
[^v3disc]: https://github.com/hasura/graphql-engine/discussions/10556
[^lts]: https://hasura.io/legal/support-policy-hasura-v2
[^fortune]: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
[^nhost]: https://nhost.io/blog/introducing-constellation
[^nhost-dev]: https://dev.to/max4nhost/we-built-an-open-source-graphql-engine-to-replace-hasura-56l
