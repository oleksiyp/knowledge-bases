---
type: OSS Project
title: Java / OpenJDK
description: The GPLv2+CPE reference implementation of Java SE, led by Oracle; technically steady (JDK 25 LTS Sept 2025, JDK 26 Mar 2026, JDK 27 Sept 2026) while Oracle's per-employee Java SE licensing and audits push enterprises to free OpenJDK builds (Adoptium Temurin 600M+ downloads) and paid alternatives like Azul, which Thoma Bravo bought a majority of in Nov 2025.
resource: https://openjdk.org
tags: [programming-language, jvm, gpl-2.0-classpath-exception, oracle, licensing-pressure, adoptium, azul]
domain: devtools-languages
license: GPL-2.0-only WITH Classpath-exception-2.0
license_history: ["GPL-2.0 with Classpath Exception (2007-)", "Oracle JDK binaries: NFTC for current LTS / Java SE Universal Subscription per-employee pricing (2023-)"]
governance: single-vendor
steward: Oracle (OpenJDK lead), with Red Hat, Microsoft, Amazon, Google, Azul, SAP, IBM contributing
backing_orgs: [organizations/azul, organizations/eclipse-foundation]
metrics:
  github_stars: { value: 23395, as_of: 2026-10-03, note: "openjdk/jdk mirror" }
  temurin_downloads: { value: "600M+", as_of: 2025-05-27 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jdk-gh
    resource: https://github.com/openjdk/jdk
    title: openjdk/jdk GitHub mirror (stars via GitHub API, 2026-10-03)
  - id: oracle-java25
    resource: https://www.oracle.com/news/announcement/oracle-releases-java-25-2025-09-16/
    title: "Oracle: Oracle Releases Java 25 (2025-09-16)"
    author: org:oracle
  - id: jb-java25
    resource: https://blog.jetbrains.com/idea/2025/09/java-25-lts-and-intellij-idea/
    title: "JetBrains Blog: Java 25 LTS and IntelliJ IDEA"
  - id: jdk26-ga
    resource: https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/thread/2MXXXBJKTJXQD25Q4XGGINKYA33T7D5I/
    title: "jdk-dev: Java 26 / JDK 26 General Availability"
  - id: hns-java26
    resource: https://www.helpnetsecurity.com/2026/03/19/java-26-security-features/
    title: "Help Net Security: Java 26 ships with new cryptography API and HTTP/3 support"
  - id: jdk27
    resource: https://openjdk.org/projects/jdk/27/
    title: "OpenJDK: JDK 27 project page"
  - id: inside-java-27
    resource: https://inside.java/2026/09/16/java-27-launch/
    title: "Inside.java: Java 27 Launch Stream"
  - id: itpro-azul-2026
    resource: https://www.itpro.com/software/development/oracle-java-pricing-concerns-state-of-java-2026
    title: "ITPro: 81% of developers plan to migrate to OpenJDK as Oracle Java pricing concerns reach boiling point"
  - id: azul-survey-2026
    resource: https://www.azul.com/newsroom/azul-2026-state-of-java-survey-report-62-of-enterprises-now-leverage-java-to-power-ai-functionality-41-rely-on-high-performance-java-platforms-to-reduce-cloud-compute-costs/
    title: "Azul: 2026 State of Java Survey & Report"
    author: org:azul
  - id: licenseware-pricing
    resource: https://licenseware.io/oracle-java-se-subscription-cost/
    title: "Licenseware: Oracle Java SE Subscription cost is an employee metric"
  - id: eclipse-temurin-600m
    resource: https://newsroom.eclipse.org/news/announcements/eclipse-foundation-and-adoptium-working-group-announce-latest-eclipse-temurin-0
    title: "Eclipse Foundation: Adoptium Working Group announces latest Eclipse Temurin (600M downloads)"
    author: org:eclipse-foundation
  - id: adoptium-temurin26
    resource: https://adoptium.net/news/2026/04/eclipse-temurin-26-available
    title: "Adoptium: Eclipse Temurin 26 Available"
  - id: adoptium-aug26
    resource: https://adoptium.net/news/2026/08/eclipse-temurin-8u502-11032-17020-21012-2504-2602-available
    title: "Adoptium: Eclipse Temurin 8u502, 11.0.32, 17.0.20, 21.0.12, 25.0.4 and 26.0.2 Available"
  - id: tb-azul
    resource: https://www.thomabravo.com/press-releases/azul-announces-strategic-investment-from-thoma-bravo
    title: "Thoma Bravo: Azul Announces Strategic Investment from Thoma Bravo"
  - id: azul-payara
    resource: https://www.azul.com/newsroom/azul-acquires-payara-strengthening-leadership-in-enterprise-java-solutions/
    title: "Azul: Azul Acquires Payara"
    author: org:azul
---

# Summary
OpenJDK is in a healthy, unglamorous steady state: the six-month cadence delivered JDK 25 (LTS, 2025-09-16, 18 JEPs incl. compact object headers, scoped values, compact source files),[^oracle-java25][^jb-java25] JDK 26 (2026-03-17, HTTP/3 client, Applet API removed)[^jdk26-ga][^hns-java26] and JDK 27 (2026-09-15, G1 default everywhere, post-quantum hybrid TLS 1.3 key exchange, compact object headers by default).[^jdk27] The bigger story is commercial: since January 2023 Oracle prices its Java SE Universal Subscription per *employee* (list $15 → $5.25 per employee/month) and audits aggressively,[^licenseware-pricing] which has driven a long migration to free or cheaper OpenJDK builds. Eclipse Temurin passed 600M downloads (May 2025),[^eclipse-temurin-600m] and Azul — the largest independent OpenJDK vendor — took a Thoma Bravo majority investment (2025-11-18) and bought Payara (2025-12-10).[^tb-azul][^azul-payara] Verdict: OSS stable; business around OpenJDK stable-to-growing for non-Oracle vendors, with Oracle's licensing the main negative force.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-27 | Eclipse Temurin passes 600M downloads (vs 380M a year earlier); Temurin Sustainer Program launched [^eclipse-temurin-600m] | OSS | + |
| W24 | 2025-09-16 | JDK 25 LTS released (18 JEPs) [^oracle-java25][^jb-java25] | OSS | + |
| W12 | 2025-11-18 | Thoma Bravo takes majority stake in Azul (price undisclosed; Vitruvian and Lead Edge reinvest) [^tb-azul] | Business | + |
| W12 | 2025-12-10 | Azul acquires Payara (Jakarta EE app server) [^azul-payara] | Business | + |
| W9 | 2026-02 | Azul 2026 State of Java: 81% migrated/migrating/planning to move Oracle Java workloads off Oracle; one-fifth already audited [^itpro-azul-2026][^azul-survey-2026] | Business | − (Oracle) |
| W9 | 2026-03-17 | JDK 26 GA (HTTP/3, PEM API, Applet API removed) [^jdk26-ga][^hns-java26] | OSS | + |
| W6 | 2026-04 | Eclipse Temurin 26 available [^adoptium-temurin26] | OSS | + |
| W3 | 2026-08-04 | Temurin quarterly updates incl. 25.0.4 [^adoptium-aug26] | OSS | + |
| W3 | 2026-09-15 | JDK 27 GA (G1 default, PQ hybrid TLS, compact object headers default) [^jdk27][^inside-java-27] | OSS | + |

# OSS successes
- Reliable six-month cadence; long-running projects (Loom, Panama, Leyden, Valhalla prep) land incrementally; compact object headers shipped in 25 and became default in 27.[^jb-java25][^jdk27]
- Multi-vendor builds ecosystem: Temurin (Adoptium WG members include Alibaba Cloud, Azul, Google, Microsoft, Red Hat, Rivos).[^eclipse-temurin-600m]

# OSS failures / risks
- Long-awaited features remain in perpetual preview (structured concurrency at seventh preview in JDK 27; Vector API at twelfth incubator).[^jdk27]
- Oracle remains the dominant OpenJDK contributor and controls the specification process.

# Business successes
- Azul: Thoma Bravo majority deal and Payara acquisition; claims 36% of Fortune 100 and the 10 largest banks as customers.[^tb-azul][^azul-payara]
- Oracle licensing pressure is effectively a sales engine for alternative vendors (Azul, Red Hat, Microsoft, Amazon Corretto).[^itpro-azul-2026]

# Business failures / risks
- For users: Oracle per-employee subscription and audit exposure (back-fees for up to three years reported by licensing consultants).[^licenseware-pricing]
- Migration statistics come mainly from Azul-sponsored surveys — directionally credible but vendor-interested.[^azul-survey-2026]

# By window
## W3
- JDK 27 GA (2026-09-15); Temurin quarterly CPU update (2026-08-04).[^jdk27][^adoptium-aug26]
## W6
- Temurin 26 GA (April 2026); JDK 27 rampdown begins (June 2026).[^adoptium-temurin26][^jdk27]
## W9
- JDK 26 GA (2026-03-17); Azul 2026 State of Java survey on Oracle migration.[^jdk26-ga][^itpro-azul-2026]
## W12
- Thoma Bravo majority investment in Azul (2025-11-18); Azul buys Payara (2025-12-10).[^tb-azul][^azul-payara]
## W24
- Temurin passes 600M downloads (May 2025); JDK 25 LTS (2025-09-16).[^eclipse-temurin-600m][^oracle-java25]

# Lessons
- A permissively distributable reference implementation (GPL+CPE) lets an ecosystem of vendors absorb a steward's monetisation squeeze — Oracle's licensing pushed users to OpenJDK builds rather than off Java.
- Neutral, foundation-run binary distribution (Adoptium) is the counterweight to a single-vendor-led project.

# Related
- [Azul](/organizations/azul.md)
- [Eclipse Foundation](/organizations/eclipse-foundation.md)
- [Thoma Bravo takes majority of Azul](/events/2025-11-thoma-bravo-majority-investment-azul.md)
- [Kotlin](/projects/devtools-languages/kotlin.md)
