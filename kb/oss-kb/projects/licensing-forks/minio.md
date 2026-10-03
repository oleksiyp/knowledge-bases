---
type: OSS Project
title: MinIO
description: "AGPL S3-compatible object store that its vendor wound down step by step — console stripped (June 2025), free binaries/images stopped (Oct 2025), maintenance mode (Dec 2025), 'no longer maintained' (Feb 2026), repo archived (Apr 2026) — in favour of proprietary AIStor; users fled to RustFS, Garage, SeaweedFS and the Pigsty 'Silo' fork."
resource: https://github.com/minio/minio
tags: [object-storage, s3, agpl, open-core, abandonment, fork]
domain: licensing-forks
license: AGPL-3.0
license_history: ["Apache-2.0 (to 2021)", "AGPL-3.0 (2021-)", "Community edition archived (2026-04-25); successor AIStor is proprietary"]
governance: single-vendor
steward: MinIO, Inc.
backing_orgs: [organizations/minio-inc]
metrics:
  github_stars: { value: 61341, as_of: 2026-10-03 }
  rustfs_github_stars: { value: 34323, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: stable
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: archived
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: minio-gh
    resource: https://github.com/minio/minio
    title: "MinIO GitHub repository (archived 2026-04-25; 'THIS REPOSITORY IS NO LONGER MAINTAINED')"
  - id: bf-console
    resource: https://blocksandfiles.com/2025/06/19/minio-removes-management-features-from-basic-community-edition-object-storage-code/
    title: "Blocks & Files: MinIO users complain after admin UI removed from Community Edition (2025-06-19)"
  - id: gh-docker-issue
    resource: https://github.com/minio/minio/issues/21647
    title: "GitHub issue #21647: MinIO stops distributing free Docker images / declines builds for CVE-2025-62506 (2025-10)"
  - id: gh-maint-commit
    resource: https://github.com/minio/minio/commit/27742d469462e1561c776f88ca7a1f26816d69e2
    title: "MinIO commit: maintenance mode (2025-12-03)"
  - id: gh-unmaintained-commit
    resource: https://github.com/minio/minio/commit/7aac2a2c5b7c882e68c1ce017d8256be2feea27f
    title: "MinIO commit: repository no longer maintained (2026-02-13)"
  - id: infoq-minio
    resource: https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
    title: "InfoQ: MinIO GitHub repository in maintenance mode — what's next (2025-12-28)"
  - id: vonng-resurrect
    resource: https://blog.vonng.com/en/db/minio-resurrect/
    title: "Vonng (Pigsty): MinIO is dead, long live MinIO (2026-02-28)"
  - id: silo
    resource: https://silo.pgsty.com
    title: "SILO: community-maintained MinIO fork by Pigsty"
  - id: rustfs-gh
    resource: https://github.com/rustfs/rustfs
    title: RustFS GitHub repository (1.0.0 on 2026-09-16)
  - id: openmaxio
    resource: https://github.com/OpenMaxIO/openmaxio-object-browser
    title: "OpenMaxIO: forked UI for MinIO (2025-10)"
  - id: cw-aistor
    resource: https://www.computerweekly.com/de/tipp/So-wird-AIStor-im-Einzelknotenbetrieb-zum-MinIO-Ersatz
    title: "ComputerWeekly DE: AIStor single-node as MinIO replacement (2026-10-01)"
  - id: aistor-memory
    resource: https://www.manilatimes.net/2026/07/29/tmt-newswire/globenewswire/minio-launches-aistor-memory-the-enterprise-memory-foundation-for-agentic-ai/2394084
    title: "MinIO launches AIStor Memory (GlobeNewswire, 2026-07-29)"
  - id: minio-arr149
    resource: https://www.min.io/press/minio-grows-arr-by-149-as-demand-for-ai-data-storage-skyrockets-d186a
    title: "MinIO press release: MinIO grows ARR by 149% as demand for AI data storage skyrockets (2025-02-28)"
  - id: rustfs-100
    resource: https://github.com/rustfs/rustfs/releases/tag/1.0.0
    title: "RustFS 1.0.0 release (published 2026-09-16; 1.0.1 on 2026-10-03)"
---

# Summary
MinIO is the period's clearest case of a vendor abandoning its own open-source project. MinIO had been AGPL since 2021. In June 2025 MinIO, Inc. removed the admin console from the Community Edition. In October 2025 it stopped publishing free binaries and Docker images, and declined to ship Docker builds for CVE-2025-62506.[^bf-console][^gh-docker-issue] It put the repo into maintenance mode on Dec 3, 2025, declared it "no longer maintained" on Feb 13, 2026, and archived it on Apr 25, 2026, pointing users to the proprietary AIStor (free single-node tier; paid Enterprise Lite under 400 TiB).[^gh-maint-commit][^gh-unmaintained-commit][^minio-gh][^cw-aistor] The community response split: the Pigsty "Silo" fork restored the console and ships binaries, and Apache-2.0 RustFS reached 1.0 on Sept 16, 2026 with 34k stars.[^silo][^rustfs-gh] Verdict: OSS dead. The business is apparently stable and focused on AI (AIStor Memory, July 2026).[^aistor-memory]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-28 | MinIO reports 149% ARR growth over two years, rebrands commercial product as AIStor[^minio-arr149] | Business | + |
| W24 | 2025-06-19 | Admin UI stripped from Community Edition[^bf-console] | OSS | − |
| W12 | 2025-10-22 | Free Docker images/binaries stopped; no Docker build for CVE-2025-62506 (HN 733 pts)[^gh-docker-issue] | OSS | − |
| W12 | 2025-10-23 | OpenMaxIO console fork appears[^openmaxio] | OSS | + |
| W12 | 2025-12-03 | Maintenance mode: no new features/PRs; security fixes case by case[^gh-maint-commit][^infoq-minio] | OSS | − |
| W9 | 2026-02-13 | "This repository is no longer maintained"[^gh-unmaintained-commit] | OSS | − |
| W9 | 2026-02-28 | Pigsty's Vonng announces MinIO resurrection fork[^vonng-resurrect] | OSS | + |
| W6 | 2026-04-25 | minio/minio archived, read-only[^minio-gh] | OSS | − |
| W3 | 2026-07-29 | MinIO launches AIStor Memory for agentic AI[^aistor-memory] | Business | + |
| W3 | 2026-08 → 09-16 | Silo fork ships regular releases (latest 2026-09-16)[^silo] | OSS | + |
| W3 | 2026-09-16 | RustFS 1.0.0 GA (Apache-2.0); 1.0.1 followed on 2026-10-03[^rustfs-100] | OSS | + |

# OSS successes
- The AGPL meant the code could be forked legally. Silo restores the console, publishes security advisories, and ships binaries with "no paywalls, no registration walls, no telemetry".[^silo]
- The ecosystem routed around the shutdown: RustFS, Garage, SeaweedFS and Ceph absorbed users.[^infoq-minio][^rustfs-gh]

# OSS failures / risks
- The original project is archived with 61k stars and an enormous installed base left on unmaintained code.[^minio-gh]
- InfoQ noted in Dec 2025 that "no fork of the MinIO community edition has gained traction" at that point. Silo is maintained mainly by one person using coding agents.[^infoq-minio][^silo]

# Business successes
- The company is focused on enterprise AI storage (AIStor, AIStor Memory, Databricks partnership).[^aistor-memory] It reported 149% two-year ARR growth and "multiple 8 figure" exabyte-scale deals in Feb 2025.[^minio-arr149]

# Business failures / risks
- MinIO burned its developer funnel, the main reason a free S3 server mattered. The long-term pipeline cost is unknown.
- MinIO gives growth rates, not absolute figures: "149% ARR growth" over two years (Feb 2025).[^minio-arr149] No new funding since the $103M Series B (Jan 2022), and no 2026 revenue figure found.

# By window
## W3
- AIStor Memory (Jul 29); Silo releases; RustFS 1.0 (Sept 16).[^aistor-memory][^silo][^rustfs-gh]
## W6
- Repo archived (Apr 25, 2026).[^minio-gh]
## W9
- "No longer maintained" (Feb 13); Pigsty fork launched (Feb 28).[^gh-unmaintained-commit][^vonng-resurrect]
## W12
- Binary/image distribution ended (Oct 2025); maintenance mode (Dec 3, 2025).[^gh-docker-issue][^gh-maint-commit]
## W24
- 149% ARR growth / AIStor rebrand (Feb 2025); console removal (June 2025).[^minio-arr149][^bf-console]

# Lessons
- AGPL does not protect against the vendor walking away. It only guarantees that someone else is allowed to pick the project up.
- Stopping free binaries for a security fix is the step that destroys trust fastest.
- When a fork has no corporate backers, an independent rewrite (RustFS) can overtake it.

# Related
- [MinIO, Inc.](/organizations/minio-inc.md)
- [MinIO enters maintenance mode](/events/2025-12-minio-maintenance-mode.md)
- [Bitnami](/projects/licensing-forks/bitnami.md)

[^minio-gh]: MinIO GitHub — https://github.com/minio/minio
[^bf-console]: Blocks & Files — https://blocksandfiles.com/2025/06/19/minio-removes-management-features-from-basic-community-edition-object-storage-code/
[^gh-docker-issue]: GitHub issue #21647 — https://github.com/minio/minio/issues/21647
[^gh-maint-commit]: MinIO commit (maintenance mode) — https://github.com/minio/minio/commit/27742d469462e1561c776f88ca7a1f26816d69e2
[^gh-unmaintained-commit]: MinIO commit (no longer maintained) — https://github.com/minio/minio/commit/7aac2a2c5b7c882e68c1ce017d8256be2feea27f
[^infoq-minio]: InfoQ — https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
[^vonng-resurrect]: Vonng blog — https://blog.vonng.com/en/db/minio-resurrect/
[^silo]: SILO — https://silo.pgsty.com
[^rustfs-gh]: RustFS GitHub — https://github.com/rustfs/rustfs
[^minio-arr149]: MinIO press — https://www.min.io/press/minio-grows-arr-by-149-as-demand-for-ai-data-storage-skyrockets-d186a
[^rustfs-100]: RustFS release 1.0.0 — https://github.com/rustfs/rustfs/releases/tag/1.0.0
[^openmaxio]: OpenMaxIO — https://github.com/OpenMaxIO/openmaxio-object-browser
[^cw-aistor]: ComputerWeekly DE — https://www.computerweekly.com/de/tipp/So-wird-AIStor-im-Einzelknotenbetrieb-zum-MinIO-Ersatz
[^aistor-memory]: GlobeNewswire via Manila Times — https://www.manilatimes.net/2026/07/29/tmt-newswire/globenewswire/minio-launches-aistor-memory-the-enterprise-memory-foundation-for-agentic-ai/2394084
