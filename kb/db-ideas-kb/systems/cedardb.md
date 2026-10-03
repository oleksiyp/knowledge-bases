---
type: System
title: CedarDB
description: "PostgreSQL-compatible HTAP database spun out of TUM in 2024 to commercialize Umbra. Small but notable as the commercial test of the 'SSD-speed buffer manager plus compiled execution' line of research."
resource: https://cedardb.com
tags: [htap, postgres-compatible, query-compilation, buffer-manager, startup]
kind: product
first_release: 2024
org: "CedarDB GmbH (Munich)"
license: proprietary
outcome: growing
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/query-compilation-vs-vectorization, ideas/postgres-ecosystem/postgres-compatibility-standard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
    author: org:cedardb
  - id: pavlo-x
    resource: https://x.com/andy_pavlo/status/1795487996717981914
    title: "Andy Pavlo on X: CedarDB is out of stealth (May 2024)"
    author: person:andy-pavlo
  - id: cedardb-ce
    resource: https://cedardb.com/blog/launch/
    title: "CedarDB: Announcing the CedarDB Community Edition"
    author: org:cedardb
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: cedardb-releases
    resource: https://cedardb.com/docs/releases/
    title: "CedarDB releases"
    author: org:cedardb
---

# Summary

CedarDB is a commercial database built by the Umbra team from TUM, including Thomas Neumann, who earlier created HyPer (sold to Tableau)[^cedardb-about]. It came out of stealth in May 2024 as a PostgreSQL-compatible system[^pavlo-x], released a free Community Edition in May 2025[^cedardb-ce], and raised a seed round in 2025 (reported around €5.3M / $5.9M, led by Amplify Partners)[^pavlo-2025]. It ships frequent dated releases through 2026[^cedardb-releases].

# Timeline

| Year | Event |
|---|---|
| 2024 | Spin-off from TUM; out of stealth (May)[^pavlo-x] |
| 2025 | Community Edition GA (May); seed funding[^cedardb-ce][^pavlo-2025] |
| 2026 | Ongoing releases (compression, PostgreSQL-compatible access control)[^cedardb-releases] |

# What worked

- Brings a decade of top-tier research (HyPer, Umbra) into a product with PostgreSQL wire compatibility, lowering adoption friction.
- Credible team: HyPer's commercial path via Tableau proves the group can ship.

# What didn't

- Very early; little public evidence of adoption at scale as of 2026.
- Competes in a crowded field (PostgreSQL extensions such as pg_duckdb, ClickHouse, DuckDB, SingleStore) where "fast" alone rarely wins.
- Proprietary, in a market that increasingly expects open source.

# Related

- [Umbra](/systems/umbra.md), [HyPer](/systems/hyper.md)
- [CedarDB launch (2024)](/events/2024-05-cedardb-launch.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
