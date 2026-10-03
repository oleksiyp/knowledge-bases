---
type: OSS Project
title: Apache Gravitino
description: Federated metadata/"geo-distributed" catalog that graduated to an Apache TLP in June 2025 and kept a regular release cadence (1.1–1.3) — a third contender in the catalog war.
resource: https://github.com/apache/gravitino
tags: [catalog, metadata, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 3236, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: grav-gh
    resource: https://github.com/apache/gravitino
    title: Apache Gravitino GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: grav-proposal
    resource: https://cwiki.apache.org/confluence/display/INCUBATOR/GravitinoProposal
    title: "Apache Incubator: Gravitino proposal (Datastrato origin; 5 of 13 initial committers from Datastrato)"
  - id: datastrato
    resource: https://datastrato.ai/
    title: "Datastrato (commercial sponsor of Gravitino)"
  - id: grav-blog
    resource: https://gravitino.apache.org/blog
    title: Apache Gravitino blog (TLP 2025-06-03; releases)
---

# Summary
Gravitino (started in 2023 at Datastrato, a startup founded by three Apache members; 5 of its 13 initial committers came from Datastrato, the rest from Xiaomi, Pinterest, Tencent, Bilibili and others)[^grav-proposal][^datastrato] provides a unified metadata layer across Hive, Iceberg, Kafka, filesets and AI assets. It became an Apache Top-Level Project on 2025-06-03 and released 1.1.0 (2025-12-19), 1.2.0 (2026-03-13), 1.3.0 (2026-06-29) and 1.3.1 (2026-09-30)[^grav-blog][^grav-gh]. Verdict: growing, quieter than Polaris/Unity but with the broadest federation scope.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-03 | Graduates to Apache TLP[^grav-blog] | OSS | + |
| W12 | 2025-12-19 | 1.1.0[^grav-blog] | OSS | + |
| W9 | 2026-03-13 | 1.2.0[^grav-blog] | OSS | + |
| W6 | 2026-06-29 | 1.3.0[^grav-blog] | OSS | + |
| W3 | 2026-09-30 | 1.3.1[^grav-gh] | OSS | + |

# OSS successes
- TLP status and quarterly-ish releases[^grav-blog].

# OSS failures / risks
- Lower Western vendor adoption than Polaris/UC (qualitative).

# Business successes
- n/a.

# Business failures / risks
- Commercial sponsor Datastrato is a small seed-stage startup with no publicly announced priced rounds found; project momentum depends on it[^grav-proposal][^datastrato].

# By window
## W3
- 1.3.1[^grav-gh].
## W6
- 1.3.0[^grav-blog].
## W9
- 1.2.0, 1.1.1[^grav-blog].
## W12
- 1.1.0[^grav-blog].
## W24
- TLP graduation[^grav-blog].

# Lessons
- Catalog projects multiplied once table formats standardized.

# Related
- [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md)

[^grav-gh]: Apache Gravitino GitHub repository.
[^grav-blog]: Apache Gravitino blog.
[^grav-proposal]: Apache Incubator Gravitino proposal.
[^datastrato]: Datastrato website.
