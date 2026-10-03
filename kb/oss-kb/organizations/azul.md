---
type: Organization
title: Azul
description: Largest independent commercial OpenJDK vendor (Azul Platform Core/Zulu builds, Platform Prime/Zing JVM); beneficiary of Oracle's Java licensing squeeze, majority-acquired by Thoma Bravo in Nov 2025 and buyer of Payara in Dec 2025.
resource: https://www.azul.com
tags: [commercial-open-source, java, openjdk, private-equity]
org_kind: coss-startup
hq: Sunnyvale, California, USA
funding: { total_usd: "undisclosed", last_round: "Majority strategic investment by Thoma Bravo (Vitruvian Partners and Lead Edge Capital reinvest)", last_round_date: 2025-11-18, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/devtools-languages/openjdk]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tb-azul
    resource: https://www.thomabravo.com/press-releases/azul-announces-strategic-investment-from-thoma-bravo
    title: "Thoma Bravo: Azul Announces Strategic Investment from Thoma Bravo"
  - id: axios-azul
    resource: https://www.axios.com/pro/enterprise-software-deals/2025/11/18/thoma-bravo-java-platform-azul
    title: "Axios Pro: Exclusive — Thoma Bravo buys Java platform Azul"
  - id: azul-payara
    resource: https://www.azul.com/newsroom/azul-acquires-payara-strengthening-leadership-in-enterprise-java-solutions/
    title: "Azul: Azul Acquires Payara"
  - id: sdtimes-payara
    resource: https://sdtimes.com/java/azul-acquires-enterprise-java-platform-payara/
    title: "SD Times: Azul acquires enterprise Java platform Payara"
  - id: itpro-azul-2026
    resource: https://www.itpro.com/software/development/oracle-java-pricing-concerns-state-of-java-2026
    title: "ITPro: 81% of developers plan to migrate to OpenJDK as Oracle Java pricing concerns reach boiling point"
  - id: azul-vitruvian
    resource: https://www.azul.com/newsroom/azul-systems-announces-strategic-growth-equity-investment-by-vitruvian-partners/
    title: "Azul: Strategic growth equity investment by Vitruvian Partners"
---

# Summary
Azul sells support and performance-enhanced builds of OpenJDK and has made Oracle's Java licensing changes its core growth thesis. On 2025-11-18 it agreed to a majority investment from Thoma Bravo (price undisclosed; Ares provided debt; prior majority owners Vitruvian Partners and Lead Edge Capital reinvested),[^tb-azul][^axios-azul] and on 2025-12-10 it acquired Payara, the Jakarta EE application-server vendor it had partnered with since 2018.[^azul-payara][^sdtimes-payara] Its annual State of Java survey (Feb 2026) reports 81% of respondents moving at least part of Oracle Java estates elsewhere.[^itpro-azul-2026]

# Business timeline
| Date | Event |
|---|---|
| 2020 | Majority investment by Vitruvian Partners (with Lead Edge) [^azul-vitruvian][^axios-azul] |
| 2025-11-18 | Thoma Bravo majority investment announced [^tb-azul] |
| 2025-12-10 | Acquires Payara [^azul-payara] |
| 2026-02 | 2026 State of Java survey: 81% migrating off Oracle Java at least partly [^itpro-azul-2026] |

# Monetization model
Subscriptions for supported OpenJDK builds (Platform Core), a proprietary high-performance JVM (Platform Prime), Intelligence Cloud (runtime inventory/vulnerability detection) and, since Payara, Jakarta EE application-server subscriptions.[^tb-azul][^azul-payara]

# Successes
- Claims 36% of the Fortune 100 and the world's ten largest banks as customers (company-reported).[^tb-azul]
- Moved up-stack from JVM to application server via Payara.[^sdtimes-payara]

# Failures / risks
- Private-equity ownership typically brings margin pressure; growth depends on Oracle continuing its aggressive licensing.
- Survey data is self-published marketing; no audited revenue figures are public.

# Related
- [Java / OpenJDK](/projects/devtools-languages/openjdk.md)
- [Thoma Bravo takes majority of Azul](/events/2025-11-thoma-bravo-majority-investment-azul.md)
