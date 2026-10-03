---
type: OSS Project
title: Saleor
description: "BSD-licensed, GraphQL-first headless commerce engine from Poland (backed by Zalando and Target Global); steady product cadence and an 'AI-native commerce stack' repositioning in 2026, but no new funding or breakout adoption in the window."
resource: https://github.com/saleor/saleor
tags: [e-commerce, headless-commerce, python, graphql, bsd-3-clause]
domain: web-platforms
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: company-led-open-core
steward: Saleor Commerce
backing_orgs: []
metrics:
  github_stars: { value: 23402, as_of: 2026-10-03 }
  latest_release: { value: "3.23.38", as_of: 2026-10-02 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/saleor/saleor
    title: Saleor GitHub repository
  - id: tc
    resource: https://techcrunch.com/2024/02/06/open-source-headless-commerce-builder-saleor-pulls-in-8m-round-led-by-target-global-and-zalando/
    title: "TechCrunch: Saleor closes $8M round led by Target Global and Zalando (2024-02-06)"
    author: org:techcrunch
  - id: agentic
    resource: https://saleor.io/blog/end-to-end-agentic-commerce
    title: "Saleor: The open end-to-end AI ecommerce stack"
  - id: blog
    resource: https://saleor.io/blog
    title: "Saleor blog / changelog"
---
# Summary
Saleor is a permissively licensed (BSD-3) GraphQL commerce API whose last disclosed raise is the **$8M seed extension led by Target Global and Zalando (Feb 2024)**, just before this window[^tc]. In the window it shipped steadily (3.2x line; release 3.23.38 on 2 Oct 2026)[^gh] and in **Feb 2026** rebranded as "the first fully open, end-to-end AI-native commerce stack" with agent entry points, followed by Dashboard extensibility, "Pulse" analytics and customer types in mid-2026[^agentic][^blog]. No layoffs or new rounds found. Verdict: OSS stable; business stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-02 | "Open end-to-end AI ecommerce stack" positioning[^agentic] | Business | + |
| W6 | 2026-06 | Configurable dashboard home, app widgets[^blog] | OSS | + |
| W3 | 2026-07/08 | Pulse analytics; customer types & attributes[^blog] | OSS | + |

# OSS successes
- Permissive license unchanged; daily patch releases[^gh].
# OSS failures / risks
- Star growth modest vs Medusa; Python/GraphQL stack less aligned with JS-heavy agency market (assessment).
# Business successes
- Strategic investor (Zalando) on cap table[^tc].
# Business failures / risks
- No capital raised in window; relies on cloud and enterprise deals (no public metrics).

# By window
## W3
- Pulse analytics and customer attributes[^blog].
## W6
- Dashboard extensibility[^blog].
## W9
- Agentic-commerce repositioning[^agentic].
## W12
- No notable events found.
## W24
- No notable events found (post-seed-extension execution).

# Lessons
- Keeping a permissive license is viable when monetisation is via hosted cloud + enterprise contracts, but growth stays modest without a distribution wedge.

# Related
- [Medusa](/projects/web-platforms/medusa.md), [Mage-OS](/projects/web-platforms/mage-os.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/saleor/saleor
[^tc]: https://techcrunch.com/2024/02/06/open-source-headless-commerce-builder-saleor-pulls-in-8m-round-led-by-target-global-and-zalando/
[^agentic]: https://saleor.io/blog/end-to-end-agentic-commerce
[^blog]: https://saleor.io/blog
