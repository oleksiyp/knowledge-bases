---
type: Organization
title: Linux Foundation
description: "The largest OSS foundation (OpenSSF, Alpha-Omega, CNCF, PyTorch, Agentic AI Foundation); in 2025-2026 it became the main channel for corporate and AI-lab money into OSS security ($12.5M grants, Akrites, Glasswing partner)."
resource: https://www.linuxfoundation.org
tags: [foundation, openssf, alpha-omega, cncf, governance]
org_kind: foundation
hq: San Francisco, CA, USA
funding: { total_usd: "n/a (nonprofit)", last_round: "n/a", last_round_date: 2026-03-17, valuation_usd: "n/a" }
business_verdict: growing
projects: [projects/security-sustainability/openssf, projects/security-sustainability/alpha-omega, projects/security-sustainability/ingress-nginx]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-lf
    resource: https://en.wikipedia.org/wiki/Linux_Foundation
    title: "Wikipedia: Linux Foundation"
  - id: lf-12m
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-12.5-million-in-grant-funding-from-leading-organizations-to-advance-open-source-security
    title: "LF: $12.5M grant funding"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites launch"
  - id: anthropic-glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Anthropic: Project Glasswing"
  - id: lf-press
    resource: https://www.linuxfoundation.org/press
    title: LF press index
  - id: openinfra-blog-cn
    resource: https://openinfra.org/blog/
    title: OpenInfra Foundation blog (joining the Linux Foundation, VMware migration WG)
  - id: cncf-otel-grad-cn
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: CNCF announces OpenTelemetry graduation
  - id: lf-sqlmesh
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-sqlmesh-project
    title: "Linux Foundation welcomes SQLMesh project (2026-03-25)"
  - id: uc-wiki
    resource: https://en.wikipedia.org/wiki/Unity_Catalog
    title: "Wikipedia: Unity Catalog (LF AI & Data)"
  - id: hw-z-44
    resource: https://www.zephyrproject.org/zephyr-rtos-4-4-now-available-wireguard-wi-fi-direct-openrisc-and-more/
    title: "Zephyr Project: Zephyr RTOS 4.4 now available (2026-04-14)"
  - id: hw-dronecode-2025
    resource: https://dronecode.org/the-2025-year-in-review/
    title: "Dronecode Foundation: The 2025 Year in Review"
  - id: hw-duranta
    resource: https://www.linuxfoundation.org/press/lf-networking-and-openairinterface-software-alliance-osa-collaborate-to-announce-duranta-to-advance-open-source-ran-innovation
    title: "LF: LF Networking and OpenAirInterface announce Duranta (2025-08)"
  - id: hw-chips-21
    resource: https://www.chipsalliance.org/news/caliptra2-1/
    title: "CHIPS Alliance: Caliptra 2.1 (2025-10-15)"
---
# Summary
The LF launched the **Agentic AI Foundation** in December 2025 (MCP donated by Anthropic, goose by Block).[^wiki-lf] On the security side, 2026 was a breakout year: **$12.5M** in AI-security grants (2026-03-17)[^lf-12m], partner status in Anthropic's **Project Glasswing** (2026-04-07)[^anthropic-glasswing], and **Akrites**, a shared SIRT/CVD hub with 19+ founding members (2026-06-25).[^lf-akrites] A May 2026 LF report described a "security readiness crisis" as the biggest obstacle to AI adoption.[^lf-press] Detailed 2025 financials were not available from the fetched annual-report landing page.

# Business timeline
| Date | Event |
|---|---|
| 2025-12 | Agentic AI Foundation launched[^wiki-lf] |
| 2026-03-17 | $12.5M security grant pool[^lf-12m] |
| 2026-04-07 | Glasswing partner[^anthropic-glasswing] |
| 2026-06-25 | Akrites launched[^lf-akrites] |

# Monetization model
Corporate memberships, events, training and certification, plus directed funds.

# Successes
- The default home for new OSS initiatives, from AI agents to security.

# Failures / risks
- Critics say it is corporate-driven and spends little on the kernel itself (not quantified here).

# Related
- [OpenSSF](/projects/security-sustainability/openssf.md), [Alpha-Omega](/projects/security-sustainability/alpha-omega.md), [Akrites](/events/2026-06-akrites-launch.md)

[^wiki-lf]: Wikipedia.
[^lf-12m]: LF press 2026-03-17.
[^lf-akrites]: LF press 2026-06-25.
[^anthropic-glasswing]: Anthropic.
[^lf-press]: LF press index.

## Additional notes (cloud-native)
- The OpenInfra Foundation (OpenStack, Kata Containers, StarlingX) merged its governance into the Linux Foundation, with the move finalized around June 2025; OpenInfra formed a working group for organizations migrating off VMware after Broadcom's licensing changes.[^openinfra-blog-cn] See [Event: OpenInfra joins the Linux Foundation](/events/2025-06-openinfra-joins-linux-foundation.md).
- The LF's CNCF graduated OpenTelemetry on May 21, 2026 (12,000+ contributors from 2,800+ companies).[^cncf-otel-grad-cn] See [CNCF](/organizations/cncf.md) and the [cloud-native domain review](/domains/cloud-native.md).

[^openinfra-blog-cn]: https://openinfra.org/blog/
[^cncf-otel-grad-cn]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/

## Additional notes (data-engineering)
- **SQLMesh** was contributed to the LF by Fivetran on 2026-03-25, with founding members Benzinga, CloudKitchens, Harness, Infinite Lambda, Jump AI and Minerva — a neutral home after Fivetran also merged with SQLMesh's rival dbt Labs.[^lf-sqlmesh] See [SQLMesh](/projects/data-engineering/sqlmesh.md) and [event](/events/2026-03-sqlmesh-linux-foundation.md).
- **Unity Catalog** OSS (Databricks) and **Delta Lake** are hosted under LF / LF AI & Data.[^uc-wiki] See [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Delta Lake](/projects/data-engineering/delta-lake.md).

[^lf-sqlmesh]: Linux Foundation press release, SQLMesh.
[^uc-wiki]: Wikipedia, Unity Catalog.

## Additional notes (hardware-embedded)
- The LF is the main neutral host for embedded and hardware OSS. **Zephyr** 4.4 (Apr 2026) had 930+ contributors and moved to a twice-yearly cadence.[^hw-z-44] **Dronecode** (PX4) logged 651 contributors from 99 organisations in 2025.[^hw-dronecode-2025] The **CHIPS Alliance** hosts the Caliptra datacenter root of trust (2.1 in Oct 2025).[^hw-chips-21] **LF Networking** and the OpenAirInterface Software Alliance launched **Duranta**, an open RAN and UE reference stack, in Aug 2025.[^hw-duranta] OpenBMC and KiCad are also LF-hosted.
- Domain files: [Zephyr](/projects/hardware-embedded/zephyr.md), [PX4](/projects/hardware-embedded/px4.md), [Caliptra](/projects/hardware-embedded/caliptra.md), [OpenBMC](/projects/hardware-embedded/openbmc.md), [KiCad](/projects/hardware-embedded/kicad.md).

[^hw-z-44]: Zephyr Project.
[^hw-dronecode-2025]: Dronecode Foundation.
[^hw-duranta]: Linux Foundation press release.
[^hw-chips-21]: CHIPS Alliance.
