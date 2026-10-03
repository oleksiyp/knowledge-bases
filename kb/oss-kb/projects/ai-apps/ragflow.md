---
type: OSS Project
title: RAGFlow
description: "InfiniFlow's Apache-2.0 deep-document RAG and agent engine (~92k stars, one of the fastest-growing AI repos of 2025) that is rewriting itself in Go for 1.0 (rc1, Sep 2026) — thriving OSS, small VC-backed Chinese company."
resource: https://github.com/infiniflow/ragflow
tags: [ai-apps, rag, apache-2.0, china, agents]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: InfiniFlow
backing_orgs: []
metrics:
  github_stars: { value: 91619, as_of: 2026-10-03 }
  github_forks: { value: 10879, as_of: 2026-10-03 }
  latest_release: { value: "v1.0.0-rc1 (2026-09-29)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ragflow-gh
    resource: https://github.com/infiniflow/ragflow
    title: RAGFlow GitHub repository (GitHub API, 2026-10-03)
  - id: ragflow-rc1
    resource: https://newreleases.io/project/github/infiniflow/ragflow/release/v1.0.0-rc1
    title: "RAGFlow v1.0.0-rc1 release notes (2026-09-29)"
  - id: ragflow-pb
    resource: https://pitchbook.com/profiles/company/541392-22
    title: "PitchBook: RAGFlow/InfiniFlow profile (aggregator)"
---

# Summary
RAGFlow is an Apache-2.0 RAG engine known for layout-aware "DeepDoc" parsing, now extended with agent workflows; ~92k stars and ~11k forks, making it the second most-starred project in this domain after Open WebUI among actively developed ones[^ragflow-gh]. Steward InfiniFlow (also builder of the Infinity database) is a small VC-backed Chinese company (seed 2023, early-stage round 2025 per PitchBook; amounts undisclosed)[^ragflow-pb]. v1.0.0-rc1 (2026-09-29) is a Go rewrite that swaps Redis for NATS, uses Kvrocks, and ships an irreversible data migration[^ragflow-rc1]. Verdict: OSS thriving; business growing but opaque.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | Early-stage VC round (amount undisclosed)[^ragflow-pb] | Business | + |
| W3 | 2026-09-10 | v0.27.2[^ragflow-gh] | OSS | + |
| W3 | 2026-09-29 | v1.0.0-rc1: Go rewrite, NATS, Kvrocks; irreversible upgrade[^ragflow-rc1] | OSS | ± |

# OSS successes
- Explosive star growth with permissive licence; frequent releases[^ragflow-gh].
# OSS failures / risks
- Go rewrite drops deprecated APIs and local sandbox; one-way migration risks user breakage[^ragflow-rc1].
# Business successes
- Strong enterprise interest in China; Apache licence unchanged.
# Business failures / risks
- Funding and revenue undisclosed; monetisation path (cloud/enterprise) not public.

# By window
## W3
- 1.0.0-rc1 Go rewrite[^ragflow-rc1].
## W6
- Steady 0.2x releases[^ragflow-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 2025 funding round[^ragflow-pb].

# Lessons
- Document-parsing quality, not vector search, became the RAG differentiator that drove adoption.

# Related
- [LightRAG](/projects/ai-apps/lightrag.md), [Dify](/projects/ai-agents/dify.md), [FastGPT](/projects/ai-apps/fastgpt.md), [MaxKB](/projects/ai-apps/maxkb.md), [Onyx](/projects/ai-apps/onyx.md)

[^ragflow-gh]: GitHub API, infiniflow/ragflow — https://github.com/infiniflow/ragflow
[^ragflow-rc1]: Release notes — https://newreleases.io/project/github/infiniflow/ragflow/release/v1.0.0-rc1
[^ragflow-pb]: PitchBook (aggregator) — https://pitchbook.com/profiles/company/541392-22
