---
type: Event
title: Broadcom ends Bitnami's free container catalog
description: "From Aug 28, 2025 Broadcom cut Bitnami's free images to a small 'latest'-only hardened subset, moved versioned images to an unmaintained bitnamilegacy repo (deleted from docker.io/bitnami by Sept 29), and sold the full catalog as Bitnami Secure Images."
event_kind: license-change
date: 2025-08-28
window: W24
impact: negative
projects: [projects/licensing-forks/bitnami]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bitnami-issue
    resource: https://github.com/bitnami/containers/issues/83267
    title: "Bitnami containers issue #83267"
  - id: charts-issue
    resource: https://github.com/bitnami/charts/issues/35164
    title: "Bitnami charts issue #35164"
  - id: broadcom-aws
    resource: https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2026/05/20/important-update-transitioning-bitnami-offerings-o
    title: "Broadcom: Transitioning Bitnami offerings on AWS (2026-05-20)"
---

# What happened
Broadcom announced in July 2025 that free Bitnami images and charts would be discontinued. On Aug 28, 2025 the catalog was restructured with rolling 24-hour brownouts, and the deletion deadline for legacy images was Sept 29, 2025.[^bitnami-issue][^charts-issue]

# Why it matters
The source code stayed Apache-2.0, but the vendor-maintained binaries were the actual product people used. It is the clearest example of putting a paywall on distribution rather than on the license.

# Outcome so far
In May 2026 Broadcom and AWS announced Bitnami's withdrawal from AWS Marketplace, Lightsail and ECR, effective June 10, 2026.[^broadcom-aws] Users moved to alternatives such as Docker Hardened Images.

# Related
- [Bitnami](/projects/licensing-forks/bitnami.md), [MinIO](/projects/licensing-forks/minio.md)

[^bitnami-issue]: GitHub — https://github.com/bitnami/containers/issues/83267
[^charts-issue]: GitHub — https://github.com/bitnami/charts/issues/35164
[^broadcom-aws]: Broadcom — https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2026/05/20/important-update-transitioning-bitnami-offerings-o
