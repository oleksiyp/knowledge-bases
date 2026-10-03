---
type: Event
title: MinIO community edition enters maintenance mode
description: "On Dec 3, 2025 MinIO put its AGPL community edition into maintenance mode (no features or PRs), after stripping the console and ending free binaries; it declared the repo unmaintained in Feb 2026 and archived it on Apr 25, 2026."
event_kind: shutdown
date: 2025-12-03
window: W12
impact: negative
projects: [projects/licensing-forks/minio]
organizations: [organizations/minio-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-maint-commit
    resource: https://github.com/minio/minio/commit/27742d469462e1561c776f88ca7a1f26816d69e2
    title: "MinIO commit: maintenance mode (2025-12-03)"
  - id: infoq-minio
    resource: https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
    title: "InfoQ: MinIO maintenance mode — what's next (2025-12-28)"
  - id: minio-gh
    resource: https://github.com/minio/minio
    title: "MinIO GitHub (archived 2026-04-25)"
  - id: silo
    resource: https://silo.pgsty.com
    title: "SILO MinIO fork"
  - id: rustfs-gh
    resource: https://github.com/rustfs/rustfs
    title: RustFS GitHub
---

# What happened
A README commit on Dec 3, 2025 put MinIO's community edition into maintenance mode: no new features, enhancements or PRs, and security fixes only case by case.[^gh-maint-commit][^infoq-minio] The repo was declared no longer maintained on Feb 13, 2026 and archived on Apr 25, 2026.[^minio-gh]

# Why it matters
It is the clearest case of a vendor abandoning an AGPL project rather than relicensing it, after removing the console (June 2025) and free binaries (Oct 2025).

# Outcome so far
Users moved to RustFS (1.0 GA Sept 2026, 34k stars), Garage, SeaweedFS and the Pigsty "Silo" fork.[^rustfs-gh][^silo]

# Related
- [MinIO](/projects/licensing-forks/minio.md), [MinIO, Inc.](/organizations/minio-inc.md)

[^gh-maint-commit]: GitHub — https://github.com/minio/minio/commit/27742d469462e1561c776f88ca7a1f26816d69e2
[^infoq-minio]: InfoQ — https://www.infoq.com/news/2025/12/minio-s3-api-alternatives/
[^minio-gh]: GitHub — https://github.com/minio/minio
[^silo]: SILO — https://silo.pgsty.com
[^rustfs-gh]: GitHub — https://github.com/rustfs/rustfs
