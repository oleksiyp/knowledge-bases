---
type: OSS Project
title: XZ Utils
description: "Compression library whose 2024 multi-year social-engineering backdoor (CVE-2024-3094) became the reference case for maintainer-takeover risk; fixed quickly and steadily maintained since (5.8.x line, several ordinary CVE fixes 2025-2026), but backdoored artifacts lingered in Docker Hub images into 2025."
resource: https://github.com/tukaani-project/xz
tags: [backdoor, social-engineering, maintainer-burnout, compression]
domain: security-sustainability
license: 0BSD
license_history: ["Public domain / mixed -> 0BSD (2024)"]
governance: community
steward: Tukaani Project (Lasse Collin)
backing_orgs: []
metrics: {}
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: n/a, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-xz
    resource: https://en.wikipedia.org/wiki/XZ_Utils_backdoor
    title: "Wikipedia: XZ Utils backdoor"
  - id: xz-releases
    resource: https://github.com/tukaani-project/xz/releases
    title: XZ Utils GitHub releases (5.8.1, 5.8.2, 5.8.3, 5.8.4)
    last_modified: 2026-09-09T00:00:00Z
  - id: thn-docker
    resource: https://thehackernews.com/2025/08/researchers-spot-xz-utils-backdoor-in.html
    title: "The Hacker News: Researchers spot XZ Utils backdoor in dozens of Docker Hub images (Aug 2025)"
  - id: bc-docker
    resource: https://www.bleepingcomputer.com/news/security/docker-hub-still-hosts-dozens-of-linux-images-with-the-xz-backdoor/
    title: "BleepingComputer: Docker Hub still hosts dozens of Linux images with the XZ backdoor"
---
# Summary
The xz backdoor was discovered on 2024-03-29 (CVE-2024-3094, CVSS 10.0). It was the work of "Jia Tan", who spent nearly two years becoming a trusted co-maintainer of a project run by a burned-out maintainer. It predates this two-year window, but its aftermath shaped all of it. Version 5.6.2 (2024-05-29) completed the cleanup.[^wiki-xz] Verdict: **stable**. Lasse Collin keeps maintaining the project normally: 5.8.0 (2025-03-25), 5.8.1 (CVE-2025-31115 fix), 5.8.2 (2025-12-17), 5.8.3 (2026-03-31, CVE-2026-34743) and 5.8.4 (2026-09-09, GHSA-5qpq-xqfv-j9pg, CVE pending).[^xz-releases] The long tail is the problem. In August 2025 Binarly found 35 Docker Hub images still carrying the backdoor, 12 of them Debian images, and Debian declined to remove them, calling them a "historical curiosity".[^thn-docker][^bc-docker]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| pre | 2024-03-29 | Backdoor disclosed[^wiki-xz] | OSS | − |
| pre | 2024-05-29 | 5.6.2 fully patched[^wiki-xz] | OSS | + |
| W24 | 2025-04-03 | 5.8.1 fixes CVE-2025-31115 (threaded decoder)[^xz-releases] | OSS | + |
| W24 | 2025-08 | Binarly: 35 Docker Hub images (12 Debian) still backdoored; Debian declines removal[^thn-docker] | OSS | − |
| W12 | 2025-12-17 | 5.8.2 released[^xz-releases] | OSS | + |
| W9 | 2026-03-31 | 5.8.3 fixes CVE-2026-34743 (buffer overflow in lzma_index_append)[^xz-releases] | OSS | + |
| W3 | 2026-09-09 | 5.8.4 fixes GHSA-5qpq-xqfv-j9pg (decoder memory-access bug)[^xz-releases] | OSS | + |

# OSS successes
- Distributions responded quickly. Canonical delayed the Ubuntu 24.04 beta to rebuild packages.[^wiki-xz]
- Ordinary, transparent vulnerability handling since then, with fixes backported to the old branches.[^xz-releases]

# OSS failures / risks
- Old container images keep vulnerabilities around indefinitely.[^thn-docker]

# Business successes
- n/a. "Maintainer takeover" became a selling point for supply-chain security vendors.

# Business failures / risks
- n/a

# By window
## W3
- 5.8.4 security-fix release.[^xz-releases]
## W6
- No notable events found.
## W9
- 5.8.3 fixed CVE-2026-34743.[^xz-releases]
## W12
- 5.8.2 released.[^xz-releases]
## W24
- 5.8.0/5.8.1 released; backdoored Docker Hub images found.[^xz-releases][^thn-docker]

# Lessons
- A lone, burned-out maintainer is a security vulnerability. Funding and helping maintainers is also supply-chain defense.
- Public registries need a way to take down known-malicious artifacts, even "historical" ones.

# Related
- [libxml2](/projects/security-sustainability/libxml2.md), [OpenSSF](/projects/security-sustainability/openssf.md)

[^wiki-xz]: Wikipedia, XZ Utils backdoor (2024 background).
[^xz-releases]: XZ Utils GitHub release notes.
[^thn-docker]: The Hacker News, Aug 2025.
[^bc-docker]: BleepingComputer, Aug 2025.
