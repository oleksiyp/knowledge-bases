---
type: OSS Project
title: Akka (and Apache Pekko fork)
description: "JVM actor toolkit relicensed to BSL by Lightbend in Sept 2022; the Apache Pekko fork graduated to a top-level ASF project in May 2024 and is heading to 2.0, while Akka continues as a commercial BSL product — a quiet, stable split with each side serving a different market."
resource: https://github.com/akka/akka-core
tags: [jvm, scala, actors, bsl, fork, apache-software-foundation]
domain: licensing-forks
license: BUSL-1.1
license_history: ["Apache-2.0 (2009-2022)", "BUSL-1.1 with 3-year change date (Akka 2.7+, Sept 2022-)"]
governance: single-vendor
steward: "Akka (formerly Lightbend, Inc.; renamed Nov 2024)"
backing_orgs: []
metrics:
  github_stars_akka_core: { value: 13281, as_of: 2026-10-03 }
  github_stars_pekko: { value: 1642, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: asf-pekko-tlp
    resource: https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
    title: "ASF: Apache Software Foundation announces new Top-Level Project Apache Pekko (2024-05-16)"
  - id: akka-rebrand
    resource: https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
    title: "Akka blog: Lightbend launches Akka 3, rebrands company as Akka (2024-11-15)"
  - id: sdtimes-rebrand
    resource: https://sdtimes.com/softwaredev/lightbend-releases-akka-3-renames-company-to-akka/
    title: "SD Times: Lightbend releases Akka 3, renames company to Akka"
  - id: akka-agentic
    resource: https://www.globenewswire.com/news-release/2025/07/14/3114647/0/en/Akka-Introduces-Agentic-AI-Platform.html
    title: "GlobeNewswire: Akka introduces Agentic AI Platform (2025-07-14)"
  - id: manulife-akka
    resource: https://www.prnewswire.com/apac/news-releases/manulife-selects-akka-to-operationalize-agentic-ai-within-its-enterprise-ai-platform-302707356.html
    title: "PR Newswire: Manulife selects Akka to operationalize agentic AI (2026-03-10)"
  - id: akka-discuss-change
    resource: https://discuss.akka.io/t/license-change-for-akka-2-7-next-year-how-it-is-supposed-to-work/10903
    title: "Akka forum: License change for Akka 2.7 — how it is supposed to work (maintainer: releases automatically become Apache at the change date)"
  - id: akka-bsl-faq
    resource: https://akka.io/bsl-license-faq
    title: Akka BSL license FAQ
  - id: akka-license
    resource: https://github.com/akka/akka-core/blob/main/LICENSE
    title: "Akka core LICENSE (BSL 1.1, Licensed Work Akka 2.10.23, Change Date 2029-09-30)"
  - id: akka-gh
    resource: https://github.com/akka/akka-core
    title: Akka core GitHub repository (tags)
  - id: pekko-gh
    resource: https://github.com/apache/pekko
    title: Apache Pekko GitHub repository (tags)
  - id: infoq-akka-bsl
    resource: https://www.infoq.com/news/2022/09/akka-no-longer-open-source/
    title: "InfoQ: Lightbend changes Akka license and is no longer open source (2022-09-20)"
---

# Summary
Akka is an older relicensing case that settled into a stable two-way split during 2024–2026. Lightbend moved Akka from Apache-2.0 to BSL 1.1 in Sept 2022. Under BSL, new code converts to Apache-2.0 after three years.[^infoq-akka-bsl][^akka-bsl-faq] The Apache Software Foundation took the last Apache-licensed code (Akka 2.6.x) as Apache Pekko, which became a top-level ASF project on May 16, 2024.[^asf-pekko-tlp] On Nov 15, 2024 Lightbend renamed itself Akka and launched the Akka 3 platform; in July 2025 it repositioned around an "Agentic AI Platform".[^akka-rebrand][^sdtimes-rebrand][^akka-agentic] In 2026 Akka is still BSL (current LICENSE covers Akka 2.10.23 with a change date of Sept 30, 2029) and is on the 10.x line of its platform tags.[^akka-license][^akka-gh] Pekko is working toward 2.0 (milestone M4 in Aug 2026).[^pekko-gh] Each side serves a different market: Akka targets paying enterprises, and Pekko serves open-source frameworks and downstream projects such as Apache Flink that needed an Apache dependency. Verdict: stable on both sides.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2022-09 | Akka relicensed to BSL 1.1[^infoq-akka-bsl] | OSS | − |
| (pre) | 2024-05-16 | Apache Pekko graduates to top-level project[^asf-pekko-tlp] | OSS | + |
| W24 | 2024-11-15 | Lightbend renames itself Akka; Akka 3 platform launched; Kalix and lightbend.com retired[^akka-rebrand][^sdtimes-rebrand] | Business | ± |
| W24 | 2025-07-14 | Akka Agentic AI Platform (Orchestration, Agents, Memory, Streaming) launched[^akka-agentic] | Business | + |
| W24/W12 | 2025-autumn | First BSL-era release (Akka 2.7.0, Oct 2022) reaches its 3-year change date and becomes Apache-2.0 automatically[^akka-discuss-change] | OSS | + |
| W9 | 2026-03-10 | Manulife selects Akka for its enterprise agentic AI platform[^manulife-akka] | Business | + |
| W3 | 2026-08 | Pekko 2.0.0-M4 milestone tag[^pekko-gh] | OSS | + |
| W3 | 2026-09/10 | Akka core 10.1.0 tags; LICENSE change date for current code: 2029-09-30[^akka-gh][^akka-license] | OSS | ± |

# OSS successes
- Pekko gives the ecosystem an Apache-licensed actor runtime under neutral ASF governance.[^asf-pekko-tlp]
- BSL change dates mean old Akka code steadily becomes Apache-2.0.[^akka-license]

# OSS failures / risks
- Pekko's visible community is small (1.6k stars vs Akka's 13k), and it depends on a few maintainers.[^pekko-gh][^akka-gh]
- The Scala/JVM actor ecosystem as a whole is shrinking.

# Business successes
- Lightbend (now Akka) still sells Akka commercially four years after the switch and has rebranded around agentic AI, with enterprise wins such as Manulife (Mar 2026).[^akka-rebrand][^akka-agentic][^manulife-akka]

# Business failures / risks
- No verified revenue or funding disclosures for 2024–2026 (aggregators list ~$121M raised in total; not confirmed by the company).

# By window
## W3
- Pekko 2.0.0-M4 (Aug 2026); Akka core 10.1.0 tags.[^pekko-gh][^akka-gh]
## W6
- No notable events found.
## W9
- Manulife agentic-AI deal (Mar 10, 2026).[^manulife-akka]
## W12
- Akka 2.7.x (first BSL release) converts to Apache-2.0 on its change date (autumn 2025).[^akka-discuss-change]
## W24
- Lightbend → Akka rebrand and Akka 3 (Nov 2024); Agentic AI Platform (Jul 2025).[^akka-rebrand][^akka-agentic]

# Lessons
- In a niche market, a BSL relicense plus a foundation fork can settle into a stable split that suits both sides, without the drama seen with Redis or Terraform.
- Downstream foundation projects that cannot depend on BSL code (e.g., Apache projects) are the most reliable source of contributors for the fork.

# Related
- [CockroachDB](/projects/licensing-forks/cockroachdb.md)
- [Terraform](/projects/licensing-forks/terraform.md) — another BSL case
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^asf-pekko-tlp]: ASF news — https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
[^akka-rebrand]: Akka blog — https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
[^sdtimes-rebrand]: SD Times — https://sdtimes.com/softwaredev/lightbend-releases-akka-3-renames-company-to-akka/
[^akka-agentic]: GlobeNewswire — https://www.globenewswire.com/news-release/2025/07/14/3114647/0/en/Akka-Introduces-Agentic-AI-Platform.html
[^manulife-akka]: PR Newswire — https://www.prnewswire.com/apac/news-releases/manulife-selects-akka-to-operationalize-agentic-ai-within-its-enterprise-ai-platform-302707356.html
[^akka-discuss-change]: Akka forum — https://discuss.akka.io/t/license-change-for-akka-2-7-next-year-how-it-is-supposed-to-work/10903
[^akka-bsl-faq]: Akka BSL FAQ — https://akka.io/bsl-license-faq
[^akka-license]: Akka core LICENSE — https://github.com/akka/akka-core/blob/main/LICENSE
[^akka-gh]: Akka core GitHub — https://github.com/akka/akka-core
[^pekko-gh]: Apache Pekko GitHub — https://github.com/apache/pekko
[^infoq-akka-bsl]: InfoQ — https://www.infoq.com/news/2022/09/akka-no-longer-open-source/
