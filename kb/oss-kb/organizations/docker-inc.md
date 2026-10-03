---
type: Organization
title: "Docker Inc."
description: "Company behind Docker Desktop, Docker Hub and Moby; changed CEO in Feb 2025, retreated from stricter Hub limits, pivoted toward AI agent tooling and made 1,000+ Hardened Images free/Apache-2.0 in Dec 2025 — stable but strategically restless."
resource: https://www.docker.com
tags: [commercial-open-source, containers, developer-tools, supply-chain-security]
org_kind: coss-startup
hq: Palo Alto, USA
funding: { total_usd: "~$540M (trackers; not company-confirmed)", last_round: "Series C $105M", last_round_date: 2022-03, valuation_usd: "2.1B (2022)" }
business_verdict: stable
projects: [projects/cloud-native/docker, projects/cloud-native/containerd]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-ceo
    resource: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
    title: "TechCrunch: Don Johnson becomes Docker CEO"
    author: org:techcrunch
  - id: docker-c
    resource: https://www.docker.com/press-release/accelerate-investments-in-developer-productivity-trusted-content-and-ecosystem-partnerships/
    title: "Docker raises $105M (Series C)"
    author: org:docker
  - id: hub-policy
    resource: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
    title: "Docker: Revisiting Docker Hub policies"
  - id: dhi
    resource: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
    title: "Docker: Hardened Images for Everyone"
  - id: tuananh
    resource: https://tuananh.net/2026/01/20/what-has-docker-become/
    title: "What has Docker become? (Jan 2026)"
  - id: tt-sale
    resource: https://www.techtarget.com/searchsoftwarequality/news/366619297/Docker-Inc-CEO-swap-has-analysts-anticipating-a-sale
    title: "TechTarget: Docker CEO swap has analysts anticipating a sale"
---

# Summary
Docker Inc. sells developer subscriptions (Desktop, Hub, Scout, Build Cloud, Testcontainers Cloud) around open-source Moby/Compose/BuildKit. It was last valued at $2.1B in its 2022 Series C[^docker-c][^tc-ceo]. On Feb 13, 2025 it appointed Don Johnson (ex-Oracle Cloud Infrastructure) as its sixth CEO, prompting sale speculation[^tc-ceo][^tt-sale]. In April 2025 it shelved planned Hub pull-limit tightening and consumption charges[^hub-policy]; it pushed into AI (Model Runner, MCP tooling, Offload, MCP Defender acquisition)[^tuananh]; and on Dec 17, 2025 it made 1,000+ Docker Hardened Images free under Apache-2.0 with paid Enterprise/ELS tiers[^dhi]. Business verdict: **stable**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-02-13 | CEO change: Scott Johnston → Don Johnson[^tc-ceo] |
| W24 | 2025-04 | Hub pull-limit changes and pull charges not enforced[^hub-policy] |
| W24 | 2025-05 | Docker Hardened Images launched (paid)[^dhi] |
| W24 | 2025-09 | MCP Defender acquisition[^tuananh] |
| W12 | 2025-12-17 | Hardened Images free/Apache-2.0; DHI Enterprise + ELS paid[^dhi] |

# Monetization model
Per-seat subscriptions (Desktop licensing for larger companies since 2021), Hub tiers, security (Scout, DHI Enterprise, ELS), cloud build/test services[^dhi].

# Successes
- 20B+ monthly Hub pulls give unmatched distribution[^dhi].
- Free DHI move repositions Docker in supply-chain security vs. Chainguard[^dhi].

# Failures / risks
- Pricing reversals on Hub; six CEOs in its history; repeated pivots[^tc-ceo][^tuananh].
- No new primary funding disclosed since 2022; no confirmed sale talks as of 2026-10-03 (pass-2 search). In May 2026 Docker partnered with/invested in NanoClaw on agent sandboxes (tracker data; terms undisclosed).

# Related
- [Docker](/projects/cloud-native/docker.md), [Chainguard](/organizations/chainguard.md)
- [Event: Docker Hardened Images free](/events/2025-12-docker-hardened-images-free.md), [Event: Hub pull-limit reversal](/events/2025-04-docker-hub-pull-limits-reversal.md)

[^tc-ceo]: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
[^docker-c]: https://www.docker.com/press-release/accelerate-investments-in-developer-productivity-trusted-content-and-ecosystem-partnerships/
[^hub-policy]: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
[^dhi]: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
[^tuananh]: https://tuananh.net/2026/01/20/what-has-docker-become/
[^tt-sale]: https://www.techtarget.com/searchsoftwarequality/news/366619297/Docker-Inc-CEO-swap-has-analysts-anticipating-a-sale
