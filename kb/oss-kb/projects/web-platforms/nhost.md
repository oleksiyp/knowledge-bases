---
type: OSS Project
title: Nhost
description: "Small MIT-licensed Postgres + GraphQL + auth backend platform (a Firebase alternative built on Hasura); in 2026 added an OAuth2/OIDC provider and MCP service and shipped Constellation, its own Hasura-compatible Go engine, to escape Hasura v2's wind-down."
resource: https://github.com/nhost/nhost
tags: [baas, graphql, postgres, mit, firebase-alternative]
domain: web-platforms
license: MIT
license_history: ["MIT"]
governance: single-vendor
steward: Nhost (company)
backing_orgs: []
metrics:
  github_stars: { value: 9331, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/nhost/nhost
    title: Nhost GitHub repository
  - id: constellation
    resource: https://nhost.io/blog/introducing-constellation
    title: "Nhost: Constellation — Hasura-compatible GraphQL in Go (2026-06-03)"
  - id: docs
    resource: https://docs.nhost.io/products/graphql/constellation
    title: "Nhost docs: Constellation"
  - id: q1
    resource: https://nhost.io/blog/newsletter-2026q1
    title: "Nhost: Product update — OAuth2 provider & PostgreSQL 18"
  - id: tns
    resource: https://thenewstack.io/nhost-carves-a-niche-between-managed-backend-and-dev-platform/
    title: "The New Stack: Nhost carves a niche between managed backend and dev platform"
---
# Summary
Nhost is a small (single-digit headcount per aggregators) BaaS that bundles Postgres, Hasura-based GraphQL, auth and storage[^tns]. In Q1 2026 it turned Nhost Auth into a full **OAuth2/OIDC provider**, moved to PostgreSQL 18 and launched an MCP service for agents[^q1]. On **3 June 2026** it released **Constellation**, an open Go GraphQL engine designed as a near drop-in for Hasura Community Edition (same metadata, ~90% less memory in production per Nhost), explicitly because Hasura v2 is winding down and v3 is not open in the same way[^constellation][^docs]. Verdict: OSS stable; business stable (small, capital-light).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-Q1 | OAuth2/OIDC provider, Postgres 18.1, MCP service[^q1] | OSS | + |
| W6 | 2026-06-03 | Constellation (alpha) replaces Hasura dependency[^constellation] | OSS | + |

# OSS successes
- De-risked its core dependency by building a compatible open engine[^constellation].
# OSS failures / risks
- Constellation is alpha; maintaining a Hasura-compatible surface is a large ongoing cost[^docs].
# Business successes
- Niche positioning between BaaS and PaaS[^tns].
# Business failures / risks
- Tiny scale vs Supabase; no disclosed recent funding.

# By window
## W3
- No notable events found.
## W6
- Constellation[^constellation].
## W9
- OAuth2 provider and MCP[^q1].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- When an upstream OSS dependency goes proprietary or stagnant, small vendors increasingly reimplement it rather than fork it.

# Related
- [Hasura](/projects/web-platforms/hasura.md), [Supabase](/projects/databases/supabase.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/nhost/nhost
[^constellation]: https://nhost.io/blog/introducing-constellation
[^docs]: https://docs.nhost.io/products/graphql/constellation
[^q1]: https://nhost.io/blog/newsletter-2026q1
[^tns]: https://thenewstack.io/nhost-carves-a-niche-between-managed-backend-and-dev-platform/
