---
type: OSS Project
title: Convex
description: "Reactive TypeScript backend database, open-sourced under FSL-1.1-Apache-2.0 with free self-hosting. It raised a $24M round (Nov 2025) after 10x growth driven by AI app builders."
resource: https://github.com/get-convex/convex-backend
tags: [reactive-database, backend, fsl, fair-source, ai-app-builders]
domain: databases
license: FSL-1.1-Apache-2.0
license_history: ["Proprietary (to 2024)", "FSL-1.1-Apache-2.0 (2024-)"]
governance: single-vendor
steward: Convex Inc.
backing_orgs: []
metrics:
  github_stars: { value: 12644, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cvx-gh
    resource: https://github.com/get-convex/convex-backend
    title: Convex backend GitHub repository
  - id: cvx-24m
    resource: https://news.convex.dev/convex-raises-24m/
    title: "Convex raises $24M to reinvent backends"
    author: org:convex
  - id: cvx-selfhost
    resource: https://news.convex.dev/self-hosting/
    title: "Convex Self-Hosting: More than just open source"
    author: org:convex
  - id: cvx-docs
    resource: https://docs.convex.dev/self-hosting
    title: Convex self-hosting docs
    author: org:convex
---

# Summary
Convex published its backend (repo created Mar 2024) under the Functional Source License, which converts to Apache-2.0 after two years. It improved the self-hosting story in 2025[^cvx-gh][^cvx-selfhost][^cvx-docs]. The repo has 12.6k stars and daily builds[^cvx-gh]. On Nov 12 2025 Convex announced a $24M round led by a16z and co-led by Spark Capital, reporting more than 10x growth in customers, projects and revenue over nine months. Roadmap priorities are components, OLAP and local-first sync[^cvx-24m]. FSL is "fair source", not OSI open source. It bans competing hosted offerings only.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Self-hosting push ("more than just open source") [^cvx-selfhost] | OSS | + |
| W12 | 2025-11-12 | $24M round (a16z, Spark). 10x growth in 9 months [^cvx-24m] | Business | + |
| W3 | 2026-10-02 | Daily precompiled releases continue [^cvx-gh] | OSS | + |

# OSS successes
- Free self-hosting with a delayed Apache-2.0 conversion[^cvx-docs].

# OSS failures / risks
- FSL is non-OSI. Single vendor.

# Business successes
- Strong growth from AI app builders[^cvx-24m].

# Business failures / risks
- Competes with Supabase's much larger platform.

# By window
## W3
- Ongoing releases[^cvx-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- $24M round[^cvx-24m].
## W24
- Self-hosting push[^cvx-selfhost].

# Lessons
- Fair-source licenses (FSL) have become the default compromise for new database startups that want self-hosting without the cloud free-rider problem.

# Related
- [Supabase](/projects/databases/supabase.md), [Gel](/projects/databases/gel.md)

[^cvx-gh]: GitHub API, get-convex/convex-backend, 2026-10-03.
[^cvx-24m]: Convex news, 2025-11-12.
[^cvx-selfhost]: Convex news, 2025.
[^cvx-docs]: Convex docs.
