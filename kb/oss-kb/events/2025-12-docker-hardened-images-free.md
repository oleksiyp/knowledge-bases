---
type: Event
title: "Docker makes 1,000+ Hardened Images free and Apache-2.0"
description: "On Dec 17, 2025 Docker turned its Docker Hardened Images catalog (launched commercially in May 2025) into free, Apache-2.0 open source, keeping SLAs, FIPS/STIG and extended lifecycle support as paid tiers — a direct challenge to Chainguard."
event_kind: license-change
date: 2025-12-17
window: W12
impact: positive
projects: [projects/cloud-native/docker]
organizations: [organizations/docker-inc, organizations/chainguard]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dhi
    resource: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
    title: "Docker: Hardened Images for Everyone"
    author: org:docker
  - id: bc-dhi
    resource: https://www.bleepingcomputer.com/news/security/docker-hardened-images-now-open-source-and-available-for-free/
    title: "BleepingComputer: Docker Hardened Images now open source and free"
    author: org:bleepingcomputer
  - id: sw-dhi
    resource: https://www.securityweek.com/docker-makes-1000-hardened-images-free-and-open-source/
    title: "SecurityWeek: Docker makes 1,000 hardened images free and open source"
    author: org:securityweek
---

# What happened
On Dec 17, 2025, Docker made more than 1,000 Docker Hardened Images and Helm charts free under Apache-2.0. The images are minimal, built on Alpine and Debian, and ship with SBOMs, CVE data and SLSA Build Level 3 provenance[^dhi][^bc-dhi]. Paid tiers remain: DHI Enterprise (7-day critical-CVE SLA, FIPS and STIG-ready images, CIS compliance, customization) and Extended Lifecycle Support (up to 5 years of patches after upstream EOL)[^dhi].

# Why it matters
Hardened base images became a funded market in 2023-2025, led by Chainguard. Docker used its distribution (20B+ monthly Hub pulls) to commoditize the artifact and charge only for SLAs and compliance[^dhi][^sw-dhi]. It is a reverse relicensing: proprietary to open, in order to win share.

# Outcome so far
The images are available on Docker Hub. Adoption figures and the effect on Chainguard's revenue are not public.

# Related
- [Docker](/projects/cloud-native/docker.md), [Docker Inc](/organizations/docker-inc.md), [Chainguard](/organizations/chainguard.md)

[^dhi]: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
[^bc-dhi]: https://www.bleepingcomputer.com/news/security/docker-hardened-images-now-open-source-and-available-for-free/
[^sw-dhi]: https://www.securityweek.com/docker-makes-1000-hardened-images-free-and-open-source/
