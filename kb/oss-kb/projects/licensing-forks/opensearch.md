---
type: OSS Project
title: OpenSearch
description: "Apache-2.0 fork of Elasticsearch (2021) now governed by the Linux Foundation's OpenSearch Software Foundation; OpenSearch 3.x shipped on a steady cadence and downloads passed 2.4B (+140% YoY) by Sept 2026 — a durable fork that outlived its parent's relicensing reversal."
resource: https://github.com/opensearch-project/OpenSearch
tags: [search, vector-database, fork, apache-2.0, foundation-hosted, linux-foundation]
domain: licensing-forks
license: Apache-2.0
license_history: ["Apache-2.0 (fork of Elasticsearch 7.10.2, 2021-)"]
governance: foundation
steward: OpenSearch Software Foundation (Linux Foundation)
backing_orgs: []
metrics:
  github_stars: { value: 13803, as_of: 2026-10-03 }
  downloads: { value: "2.4B+ (+140% YoY)", as_of: 2026-09-22 }
  contributor_growth_yoy: { value: "+31%", as_of: 2026-09-22 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: os-gh
    resource: https://github.com/opensearch-project/OpenSearch
    title: OpenSearch GitHub repository (releases)
  - id: lf-opensearch-members
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
    title: "Linux Foundation: OpenSearch Software Foundation expands enterprise ecosystem with new members (2026-09-22)"
  - id: itsfoss-os-report
    resource: https://itsfoss.com/news/opensearch-open-data-report-2026/
    title: "It's FOSS: Organizations are now reaching for OpenSearch for AI, not just search"
  - id: lf-osf
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics
    title: "Linux Foundation: announces OpenSearch Software Foundation (2024-09-16; 700M+ downloads; premier members AWS, SAP, Uber)"
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic blog: Elasticsearch is open source. Again!"
---

# Summary
OpenSearch is AWS's 2021 fork of Elasticsearch 7.10. It moved to vendor-neutral governance under the Linux Foundation's OpenSearch Software Foundation in September 2024, shortly after Elastic added AGPL.[^lf-osf][^elastic-agpl] Elastic's reversal did not reduce OpenSearch's momentum. OpenSearch 3.0 shipped in May 2025, and in September 2026 the foundation reported more than 2.4B downloads (+140% YoY), contributor growth of +31% YoY, and new members including Intel.[^lf-opensearch-members] A 2026 survey found production deployments rose from 19% to 36% of surveyed organizations, with 62% of users running AI workloads on it.[^itsfoss-os-report] Verdict: growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-09-16 | OpenSearch Software Foundation launched under the Linux Foundation (premier members AWS, SAP, Uber)[^lf-osf] | OSS | + |
| W24 | 2025-05 | OpenSearch 3.0 (vector/AI performance focus)[^itsfoss-os-report] | OSS | + |
| W6 | 2026-06-09 | OpenSearch 3.7.0[^os-gh] | OSS | + |
| W3 | 2026-08-05 | OpenSearch 3.8.0[^os-gh] | OSS | + |
| W3 | 2026-09-22 | Intel, Adelean, Sidecar join; 2.4B downloads (+140% YoY); contributors +31%[^lf-opensearch-members] | OSS | + |
| W3 | 2026-09-29 | OpenSearch 3.9.0[^os-gh] | OSS | + |

# OSS successes
- Neutral foundation governance with commercial LTS providers (e.g., Seacom, Sidecar) certified in 2026.[^lf-opensearch-members]
- Roughly monthly minor releases on the 3.x line in 2026.[^os-gh]
- Repositioned as AI/vector infrastructure: 44% of users call it core AI infrastructure.[^itsfoss-os-report]

# OSS failures / risks
- Only 36% of users describe their deployment as deeply embedded or mission-critical.[^itsfoss-os-report]
- AWS remains the dominant contributor and distributor, so it is still unclear how independent the foundation really is.
- Elastic's AGPL option removes the "only open option" argument for some users.[^elastic-agpl]

# Business successes
- n/a for the project. Value goes to AWS OpenSearch Service and to LTS/consulting vendors.

# Business failures / risks
- n/a.

# By window
## W3
- New members and download/contributor statistics (Sept 22, 2026); 3.8 and 3.9 releases.[^lf-opensearch-members][^os-gh]
## W6
- 3.7.0 release (June 2026).[^os-gh]
## W9
- Continued 3.x minor releases; no governance events found.
## W12
- No notable events found.
## W24
- OpenSearch 3.0 (May 2025), first full year under the foundation.[^itsfoss-os-report]

# Lessons
- Moving the fork into a foundation turned it from "AWS's fork" into a multi-vendor project that can outlast its parent's change of course.
- If the original vendor reverses its license after the fork has a foundation, the fork stays.

# Related
- [Elasticsearch](/projects/licensing-forks/elasticsearch.md)
- [Elastic](/organizations/elastic.md)
- [Valkey](/projects/licensing-forks/valkey.md), [OpenTofu](/projects/licensing-forks/opentofu.md)

[^os-gh]: OpenSearch GitHub — https://github.com/opensearch-project/OpenSearch
[^lf-opensearch-members]: Linux Foundation — https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
[^itsfoss-os-report]: It's FOSS — https://itsfoss.com/news/opensearch-open-data-report-2026/
[^lf-osf]: Linux Foundation — https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics
[^elastic-agpl]: Elastic blog — https://www.elastic.co/blog/elasticsearch-is-open-source-again
