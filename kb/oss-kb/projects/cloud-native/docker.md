---
type: OSS Project
title: "Docker (Moby / Docker Engine / Docker Hub)"
description: "The container developer toolchain; OSS Moby remains foundational, while Docker Inc. changed CEO (Feb 2025), backed off stricter Docker Hub pull limits (Apr 2025), pivoted to AI tooling (Model Runner, MCP) and made 1,000+ Hardened Images free under Apache-2.0 (Dec 2025) — OSS stable, business searching for its next act."
resource: https://github.com/moby/moby
tags: [cloud-native, containers, apache-2.0, company-led, supply-chain-security]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2013-)", "Docker Desktop proprietary subscription for large orgs (2021-)"]
governance: company-led-open-core
steward: Docker Inc.
backing_orgs: [organizations/docker-inc]
metrics:
  moby_github_stars: { value: 72142, as_of: 2026-10-03 }
  docker_hub_monthly_pulls: { value: "20B+", as_of: 2025-12-17 }
  hardened_images_free: { value: "1,000+", as_of: 2025-12-17 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: moby-gh
    resource: https://github.com/moby/moby
    title: "moby/moby repository"
    last_modified: 2026-10-03T00:00:00Z
  - id: dhi
    resource: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
    title: "Docker: Hardened Images for Everyone (Dec 17, 2025)"
    author: org:docker
  - id: hub-policy
    resource: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
    title: "Docker: Revisiting Docker Hub policies"
    author: org:docker
  - id: tc-ceo
    resource: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
    title: "TechCrunch: Former Oracle cloud exec Don Johnson takes over as Docker's new CEO"
    author: org:techcrunch
  - id: tt-sale
    resource: https://www.techtarget.com/searchsoftwarequality/news/366619297/Docker-Inc-CEO-swap-has-analysts-anticipating-a-sale
    title: "TechTarget: Docker Inc. CEO swap has analysts anticipating a sale"
    author: org:techtarget
  - id: tuananh
    resource: https://tuananh.net/2026/01/20/what-has-docker-become/
    title: "Tuan-Anh Tran: What has Docker become? (Jan 2026)"
  - id: docker-pr-archive
    resource: https://www.docker.com/company/newsroom/press-release-archive/
    title: "Docker press release archive (checked 2026-10-03)"
    author: org:docker
  - id: docker-mcp-defender
    resource: https://www.docker.com/blog/docker-acquires-mcp-defender-ai-agent-security/
    title: "Docker blog: Docker acquires MCP Defender (Sep 2025)"
    author: org:docker
  - id: docker-cloud-sandboxes
    resource: https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/
    title: "Docker press release: Docker launches Cloud Sandboxes (Sep 24, 2026)"
    author: org:docker
  - id: hns-sandboxes
    resource: https://www.helpnetsecurity.com/2026/09/25/docker-launches-cloud-sandboxes/
    title: "Help Net Security: Docker introduces OCI-based Kits, launches Cloud Sandboxes (Sep 25, 2026)"
    author: org:help-net-security
  - id: docker-execs
    resource: https://www.globenewswire.com/news-release/2026/08/18/3346892/0/en/docker-strengthens-leadership-team-with-appointments-of-mat-velloso-as-chief-product-officer-and-vinh-le-as-chief-financial-officer.html
    title: "GlobeNewswire: Docker appoints Mat Velloso (CPO) and Vinh Le (CFO) (Aug 18, 2026)"
    author: org:docker
  - id: sacra-docker
    resource: https://sacra.com/c/docker/
    title: "Sacra: Docker revenue, valuation & funding (estimates)"
  - id: docker-nanoclaw
    resource: https://www.docker.com/company/newsroom/
    title: "Docker newsroom: NanoClaw partners with Docker on Docker Sandboxes (Mar 13, 2026)"
    author: org:docker
  - id: bc-dhi
    resource: https://www.bleepingcomputer.com/news/security/docker-hardened-images-now-open-source-and-available-for-free/
    title: "BleepingComputer: Docker Hardened Images now open source and free"
    author: org:bleepingcomputer
---

# Summary
Docker's open-source core (Moby, BuildKit, Compose) is mature, ubiquitous infrastructure; Docker Hub serves 20B+ pulls a month[^dhi]. The business story is more turbulent. In February 2025 Docker replaced CEO Scott Johnston with ex-Oracle Cloud executive Don Johnson — its sixth CEO — and analysts speculated about a sale[^tc-ceo][^tt-sale]. Planned stricter Docker Hub pull limits and consumption charges for April 1, 2025 were postponed or cancelled after backlash[^hub-policy]. Docker then leaned into AI (Model Runner, MCP tooling, Offload; the MCP Defender acquisition in Sep 2025)[^tuananh][^docker-mcp-defender] and, on Dec 17, 2025, made 1,000+ Docker Hardened Images free and Apache-2.0, keeping SLAs, FIPS/STIG and extended lifecycle as paid tiers[^dhi][^bc-dhi]. In 2026 the AI-agent pivot became the strategy: Docker Sandboxes (with NanoClaw, Mar 2026), new AI-focused CPO Mat Velloso and CFO Vinh Le (Aug 18, 2026), and Cloud Sandboxes — microVM-isolated agent runtimes billed per second, with "Kits" packaging agents as OCI images that Docker plans to submit to the CNCF (Sep 24, 2026)[^docker-nanoclaw][^docker-execs][^docker-cloud-sandboxes][^hns-sandboxes]. Docker does not publish revenue; Sacra estimates ARR of $207M for 2024 (unconfirmed)[^sacra-docker]. Verdict: OSS **stable**; business **stable** but repeatedly repositioning.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-13 | CEO Scott Johnston replaced by Don Johnson (ex-OCI)[^tc-ceo] | Business | mixed |
| W24 | 2025-04 | Docker Hub pull-limit tightening and pull charges not enforced; storage billing delayed indefinitely[^hub-policy] | Business | − |
| W24 | 2025-05-19 | Docker Hardened Images (DHI) catalog launched as a commercial product[^docker-pr-archive] | Business | + |
| W24 | 2025-07-10 | Compose support for agentic apps, Docker Offload; WeAreDevelopers partnership for a 2026 North America event[^docker-pr-archive] | Business | + |
| W24 | 2025-09 | Acquires MCP Defender (AI agent security)[^docker-mcp-defender] | Business | + |
| W12 | 2025-12-17 | 1,000+ Hardened Images made free and Apache-2.0; Enterprise/ELS paid tiers[^dhi][^bc-dhi] | Both | + |
| W9 | 2026-01-20 | Commentary questions Docker's identity amid repeated pivots[^tuananh] | Business | − |
| W9 | 2026-03-13 | NanoClaw integrates with Docker Sandboxes (AI agent isolation)[^docker-pr-archive] | Business | + |
| W3 | 2026-08-18 | New CPO (Mat Velloso, ex-Google AI Studio/Meta) and CFO (Vinh Le)[^docker-execs] | Business | + |
| W3 | 2026-09-24 | Docker Cloud Sandboxes (microVM agent runtimes) and OCI-based Kits launched[^docker-cloud-sandboxes][^hns-sandboxes] | Business | + |

# OSS successes
- Open-sourcing hardened images with SBOMs and SLSA Build Level 3 provenance raised the supply-chain baseline for everyone[^dhi].
- Moby/BuildKit remain the de facto build toolchain (72k stars)[^moby-gh].

# OSS failures / risks
- Docker Engine is increasingly bypassed in production (containerd/CRI-O on Kubernetes), shrinking Docker's operational relevance.

# Business successes
- Developer-tool revenue (Desktop subscriptions, Scout, Testcontainers Cloud, Build Cloud) sustains a private company last valued at $2.1B in 2022[^tc-ceo]; third-party estimates put 2024 ARR around $207M (not company-confirmed)[^sacra-docker].
- AI-agent sandboxing (local and cloud) gives Docker a new metered product line[^docker-cloud-sandboxes].
- DHI free tier is a funnel to Enterprise compliance offerings[^dhi].

# Business failures / risks
- Hub monetization reversals show limited pricing power over free pulls[^hub-policy].
- Strategy churn and CEO turnover; acquisition speculation[^tt-sale][^tuananh].
- DHI competes with Chainguard, which pioneered the hardened-image market.

# By window
## W3
- CPO/CFO appointments (Aug 18); Cloud Sandboxes and Kits (Sep 24)[^docker-execs][^docker-cloud-sandboxes].
## W6
- No notable events found (no press releases between Mar 13 and Aug 18, 2026)[^docker-pr-archive].
## W9
- Public debate on Docker's direction[^tuananh]; NanoClaw/Docker Sandboxes partnership (Mar 13)[^docker-pr-archive].
## W12
- Hardened Images free/open (Dec 17, 2025)[^dhi].
## W24
- CEO change; Hub limits reversal; DHI launch; MCP Defender[^tc-ceo][^hub-policy][^docker-pr-archive][^docker-mcp-defender].

# Lessons
- Commoditized infrastructure is hard to tax after the fact (Hub limits); bundling security/compliance SLAs works better than metering pulls.
- Giving away the artifact (hardened images) while selling the SLA is the 2025 open-source security playbook.

# Related
- [Docker Inc](/organizations/docker-inc.md), [Podman](/projects/cloud-native/podman.md), [containerd](/projects/cloud-native/containerd.md)
- [Event: Docker Hardened Images free](/events/2025-12-docker-hardened-images-free.md), [Event: Docker Hub pull-limit reversal](/events/2025-04-docker-hub-pull-limits-reversal.md)
- Bitnami image catalog changes: [Bitnami](/projects/licensing-forks/bitnami.md)

[^moby-gh]: https://github.com/moby/moby
[^dhi]: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
[^hub-policy]: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
[^tc-ceo]: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
[^tt-sale]: https://www.techtarget.com/searchsoftwarequality/news/366619297/Docker-Inc-CEO-swap-has-analysts-anticipating-a-sale
[^tuananh]: https://tuananh.net/2026/01/20/what-has-docker-become/
[^docker-pr-archive]: https://www.docker.com/company/newsroom/press-release-archive/
[^docker-mcp-defender]: https://www.docker.com/blog/docker-acquires-mcp-defender-ai-agent-security/
[^docker-cloud-sandboxes]: https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/
[^hns-sandboxes]: https://www.helpnetsecurity.com/2026/09/25/docker-launches-cloud-sandboxes/
[^docker-execs]: https://www.globenewswire.com/news-release/2026/08/18/3346892/0/en/docker-strengthens-leadership-team-with-appointments-of-mat-velloso-as-chief-product-officer-and-vinh-le-as-chief-financial-officer.html
[^sacra-docker]: https://sacra.com/c/docker/
[^docker-nanoclaw]: https://www.docker.com/company/newsroom/
[^bc-dhi]: https://www.bleepingcomputer.com/news/security/docker-hardened-images-now-open-source-and-available-for-free/
