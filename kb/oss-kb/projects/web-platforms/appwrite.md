---
type: OSS Project
title: Appwrite
description: "BSD-licensed open-source backend-as-a-service (Firebase alternative); took Appwrite Cloud GA (Aug 2025), launched Sites hosting and the 'Imagine' AI app builder, and shipped Appwrite 2.0 on PostgreSQL (Sept 2026) — but has not raised since its 2022 $27M Series A and reportedly cut staff in 2026."
resource: https://github.com/appwrite/appwrite
tags: [baas, firebase-alternative, bsd-3-clause, vc-backed, ai-app-builder]
domain: web-platforms
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: single-vendor
steward: Appwrite Code Ltd.
backing_orgs: [organizations/appwrite]
metrics:
  github_stars: { value: 57548, as_of: 2026-10-03 }
  cloud_projects: { value: "300,000+", as_of: 2025-08 }
oss_verdict: growing
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/appwrite/appwrite
    title: Appwrite GitHub repository
  - id: ga
    resource: https://appwrite.io/changelog/entry/2025-08-06
    title: "Appwrite changelog: Appwrite Cloud is now generally available (2025-08-06)"
  - id: aug25
    resource: https://appwrite.io/blog/post/product-update-august-2025
    title: "Appwrite: August product update — Cloud GA, TablesDB UI"
  - id: imagine
    resource: https://appwrite.io/blog/post/introducing-imagine
    title: "Appwrite: Introducing Imagine"
  - id: v2
    resource: https://appwrite.io/blog/post/announcing-appwrite-2
    title: "Appwrite: Announcing Appwrite 2.0"
  - id: v2-self
    resource: https://appwrite.io/changelog/entry/2026-09-07
    title: "Appwrite changelog: Appwrite 2.0 for self-hosted deployments (2026-09-07)"
  - id: vb
    resource: https://venturebeat.com/business/appwrite-an-open-source-backend-as-a-service-provider-raises-27m
    title: "VentureBeat: Appwrite raises $27M (2022)"
  - id: glassdoor
    resource: https://www.glassdoor.co.in/Reviews/Employee-Review-Appwrite-RVW93291021.htm
    title: "Glassdoor employee review mentioning 'massive layoffs' (2026-04)"
---
# Summary
Appwrite's OSS product matured fast: **Appwrite Cloud left a 26-month beta and went GA in Aug 2025** (300K+ projects)[^ga][^aug25], **Sites** added web hosting (May 2025), the **Imagine** AI app builder (Dec 2025) generated full-stack apps on Appwrite Cloud[^imagine], and **Appwrite 2.0** (cloud ~1 Sept, self-hosted 7 Sept 2026) brought PostgreSQL as default, five database types, an S3 API and an OAuth 2.1 server[^v2][^v2-self]. Business signals are weaker: the last disclosed raise is the $27M Series A of 2022[^vb], and an April 2026 employee review mentions "massive layoffs" (single anonymous source, unconfirmed)[^glassdoor]. Supabase's rapid funding (see [Supabase](/projects/databases/supabase.md)) left Appwrite a distant #2 in VC-backed open BaaS. Verdict: OSS growing; business struggling (relative).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | Appwrite Sites (open-source hosting)[^aug25] | OSS | + |
| W24 | 2025-08-06 | Appwrite Cloud GA (300K+ projects)[^ga] | Business | + |
| W12 | 2025-12 | Imagine AI app builder launched[^imagine] | Business | + |
| W6 | 2026-04 | Employee review reports layoffs (unconfirmed)[^glassdoor] | Business | − |
| W3 | 2026-09-01/07 | Appwrite 2.0 (Postgres default, OAuth 2.1, S3 API)[^v2][^v2-self] | OSS | + |

# OSS successes
- 57.5K stars, permissive license unchanged; 2.0 is migration-free for existing projects[^v2].
# OSS failures / risks
- Breadth (functions, sites, messaging, AI builder) stretches a small team (assessment).
# Business successes
- Cloud GA with formal SLAs; AI builder captures "vibe coding" demand[^ga][^imagine].
# Business failures / risks
- No new capital since 2022[^vb]; reported layoffs[^glassdoor]; competes with Supabase, Firebase Studio and Convex.

# By window
## W3
- Appwrite 2.0[^v2].
## W6
- Reported layoffs (unconfirmed)[^glassdoor].
## W9
- No notable events found.
## W12
- Imagine launch[^imagine].
## W24
- Sites; Cloud GA[^ga].

# Lessons
- In BaaS the "AI app builder backend" became the growth market; the winner (Supabase) was the one embedded in Lovable/Bolt-style builders, not the one that built its own.

# Related
- [Appwrite (org)](/organizations/appwrite.md)
- [Supabase](/projects/databases/supabase.md), [Convex](/projects/databases/convex.md), [PocketBase](/projects/web-platforms/pocketbase.md), [Hasura](/projects/web-platforms/hasura.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/appwrite/appwrite
[^ga]: https://appwrite.io/changelog/entry/2025-08-06
[^aug25]: https://appwrite.io/blog/post/product-update-august-2025
[^imagine]: https://appwrite.io/blog/post/introducing-imagine
[^v2]: https://appwrite.io/blog/post/announcing-appwrite-2
[^v2-self]: https://appwrite.io/changelog/entry/2026-09-07
[^vb]: https://venturebeat.com/business/appwrite-an-open-source-backend-as-a-service-provider-raises-27m
[^glassdoor]: https://www.glassdoor.co.in/Reviews/Employee-Review-Appwrite-RVW93291021.htm
