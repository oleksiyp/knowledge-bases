---
type: Organization
title: MinIO, Inc.
description: "Vendor of the MinIO S3-compatible object store that wound down its AGPL community edition (2025-26) and archived the repo in April 2026 to focus on proprietary AIStor for enterprise AI."
resource: https://www.min.io
tags: [commercial-open-source, object-storage, open-core, abandonment]
org_kind: coss-startup
hq: Redwood City, USA
funding: { total_usd: "$126M (company, Jan 2022)", last_round: "Series B $103M (Intel Capital lead; SoftBank Vision Fund 2)", last_round_date: 2022-01-26, valuation_usd: "1B (2022)" }
business_verdict: stable
projects: [projects/licensing-forks/minio]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: minio-gh
    resource: https://github.com/minio/minio
    title: MinIO GitHub repository (archived)
  - id: infoq-minio
    resource: https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
    title: "InfoQ: MinIO in maintenance mode (2025-12-28)"
  - id: aistor-memory
    resource: https://www.manilatimes.net/2026/07/29/tmt-newswire/globenewswire/minio-launches-aistor-memory-the-enterprise-memory-foundation-for-agentic-ai/2394084
    title: "MinIO launches AIStor Memory (2026-07-29)"
  - id: cw-aistor
    resource: https://www.computerweekly.com/de/tipp/So-wird-AIStor-im-Einzelknotenbetrieb-zum-MinIO-Ersatz
    title: "ComputerWeekly DE: AIStor Free single-node, Enterprise Lite under 400 TiB (2026-10-01)"
  - id: minio-b
    resource: https://www.min.io/press/minio-closes-103-million-series-b-round-at-1-billion-valuation-to-accelerate-multi-cloud-storage
    title: "MinIO press: MinIO closes $103M Series B at $1B valuation (2022-01-26)"
    author: org:minio
---

# Summary
MinIO, Inc. turned its popular AGPL project into a funnel for the proprietary AIStor and then shut the funnel down. In order, it stripped the console, stopped binaries, entered maintenance mode, declared the project unmaintained, and archived the repo on 2026-04-25.[^minio-gh][^infoq-minio] The company now sells AIStor (a free single-node tier, Enterprise Lite under 400 TiB, and Enterprise) and launched AIStor Memory for agentic AI in July 2026.[^cw-aistor][^aistor-memory] MinIO last raised a $103M Series B at a $1B valuation on 2022-01-26, led by Intel Capital with SoftBank Vision Fund 2, for $126M in total[^minio-b]; revenue is undisclosed.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W12 | 2025-12-03 | Community edition to maintenance mode[^infoq-minio] | − |
| W6 | 2026-04-25 | Repo archived[^minio-gh] | − |
| W3 | 2026-07-29 | AIStor Memory launched[^aistor-memory] | + |

# Monetization model
A proprietary AIStor subscription. The free tier is limited to a single node.[^cw-aistor]

# Successes
- Clear enterprise AI positioning and partnerships.[^aistor-memory]

# Failures / risks
- It gave away its developer mindshare to RustFS, Garage, SeaweedFS and the Silo fork.[^infoq-minio]

# Related
- [MinIO](/projects/licensing-forks/minio.md), [MinIO maintenance mode event](/events/2025-12-minio-maintenance-mode.md)

[^minio-gh]: GitHub — https://github.com/minio/minio
[^infoq-minio]: InfoQ — https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
[^aistor-memory]: GlobeNewswire via Manila Times — https://www.manilatimes.net/2026/07/29/tmt-newswire/globenewswire/minio-launches-aistor-memory-the-enterprise-memory-foundation-for-agentic-ai/2394084
[^cw-aistor]: ComputerWeekly DE — https://www.computerweekly.com/de/tipp/So-wird-AIStor-im-Einzelknotenbetrieb-zum-MinIO-Ersatz
[^minio-b]: MinIO press release, 2022-01-26.
