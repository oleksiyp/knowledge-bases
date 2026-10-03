---
type: Context
title: "Next Generation Internet (NGI): history 2018–2024"
description: How the Commission's Next Generation Internet initiative grew from a Horizon 2020 priority (2018–2020, >€250M) into a Horizon Europe cascade-funding machine (NGI Zero and sister projects) that funded well over 1,000 small open-source projects — the direct predecessor of the Open Internet Stack.
tags: [open-internet-stack, next-generation-internet, ngi-zero, history, cascade-funding]
period: 2016-2024
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ngi-about
    title: "NGI.eu — The NGI Initiative: An Internet of Trust"
    resource: https://ngi.eu/about/
  - id: ngi-faq
    title: "NGI.eu — Frequently Asked Questions"
    resource: https://ngi.eu/faq/
  - id: dsm-ngi
    title: "European Commission, Shaping Europe's digital future — Next Generation Internet initiative"
    resource: https://digital-strategy.ec.europa.eu/en/policies/next-generation-internet-initiative
  - id: nlnet-ngi0
    title: "NLnet — About NGI Zero"
    resource: https://nlnet.nl/NGI0/
  - id: nlnet-stocktaking
    title: "NLnet: Transitioning from NGI to Open Internet Stack — open calls temporarily paused (12 Jun 2026)"
    resource: https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
  - id: mackintosh-2025
    title: "Stuart J Mackintosh, 'From NGI to Open Internet Stack — Activating the European open digital industry', report for DG CNECT, 21 May 2025 (published by netzpolitik.org)"
    resource: https://cdn.netzpolitik.org/wp-upload/2025/06/From_NGI_to_Open_Internet_Stack____Activating_the_European_open_digital_industry.pdf
  - id: fsfe-ngi0
    title: "FSFE — Next Generation Internet Zero (NGI0)"
    resource: https://fsfe.org/activities/ngi/ngi.en.html
  - id: fsfe-2024
    title: "FSFE: EC cuts funding support for Free Software projects (19 Jul 2024)"
    resource: https://fsfe.org/news/2024/news-20240719-01.en.html
  - id: ngi-forum-2025
    title: "NGI.eu: NGI Forum 2025 marks a strategic shift from Next Generation Internet toward the Open Internet Stack (27 Jun 2025)"
    resource: https://ngi.eu/news/2025/06/27/ngi-forum-2025-marks-a-strategic-shift-from-next-generation-internet-toward-the-open-internet-stack/
---
# Summary

The **Next Generation Internet (NGI)** initiative is DG CONNECT's programme to "reimagine and re-engineer the Internet of tomorrow", promoting openness, privacy, security, inclusiveness and user choice, and supporting "grass-root innovators" across the internet stack so as to enable compliance with EU law such as GDPR, DSA and DMA[^dsm-ngi]. Its signature tool was **cascade funding**: a few Horizon grants to intermediaries that re-granted small amounts to individuals, SMEs and labs in short cycles[^ngi-faq].

# Timeline

| Period | What happened |
|---|---|
| 2017 | First NGI Forum edition[^ngi-forum-2025] |
| 2018–2020 (Horizon 2020) | NGI became "a key priority in the H2020 ICT work programme 2018-2020"[^ngi-faq]; the Commission invested "more than €250m", supporting "more than 1,000 Internet researchers and innovators"[^ngi-about]. NGI Zero PET (825310) and NGI Zero Discovery (825322) launched, coordinated by NLnet[^nlnet-ngi0]; FSFE joined NGI0 in November 2018[^fsfe-ngi0]. |
| 2021–2024 (Horizon Europe, Cluster 4) | NGI topics continued in Cluster 4 work programmes. New cascade funds NGI Zero Entrust (101069594, Aug 2022–Jan 2026, 242 projects), NGI Zero Review (101070519, security/accessibility/packaging services, 2022–2026), NGI Zero Core (101092990) and NGI Zero Commons Fund (101135429)[^nlnet-ngi0]; sister projects such as [NGI Search](/projects/ngi-search.md), [OpenWebSearch.eu](/projects/openwebsearch-eu.md), [TrustChain](/projects/trustchain.md), [NGI Sargasso](/projects/ngi-sargasso.md), [NGI TRANSOCEANIC](/projects/ngi-transoceanic.md), [NGI Enrichers](/projects/ngi-enrichers.md), deployment pilots ([TALER](/projects/taler.md), [MOBIFREE](/projects/mobifree.md), [Fediversity](/projects/fediversity.md), [Local for Local](/projects/local-for-local.md)), the outreach CSA [NGI4ALL.E](/projects/ngi4all-e.md) and the policy CSA [NGI Commons](/projects/ngi-commons.md). |
| 2023–2025 | Around €27M allocated to NGI under the Cluster 4 work programme 2023-2025, per FSFE[^fsfe-2024] (see [/context/ngi-funding-controversy-2024.md](/context/ngi-funding-controversy-2024.md)). |
| July 2024 | Draft WP 2025 omitted NGI → open letter and campaign. |
| 2025 | WP 2025 introduces the **Open Internet Stack** topic; NGI Forum 2025 (Brussels, 19–20 June) reframes NGI as OIS[^ngi-forum-2025]. |

# Scale and results

- **NLnet / NGI Zero alone:** over **€50 million** granted to over **1,000 projects**[^nlnet-ngi0]; by June 2026 NLnet counted **1,215 projects funded from ~8,500 applications** across five NGI Zero programmes, plus 215 projects through adjacent NGI programmes, and more than 10,000 applications overall[^nlnet-stocktaking].
- **Whole NGI (2019–2026):** a May 2025 report prepared for DG CNECT states NGI "granted 150M€ to more than 1,300 projects" via FSTP to SMEs, associations, small labs and individuals, with **83% of awards going to newcomers** to EU funding[^mackintosh-2025].
- **Gartner benchmarking (April 2024)**, as summarised in that report: 84% of projects available in public repositories, an estimated 80,000-strong contributor ecosystem; 90% of surveyed projects connected to at least one EU policy; 47% providing alternatives to existing platforms; 39% enabling GDPR, 30% the Cyber Resilience Act, 23% DSA/DMA; but only 8% created a legal structure and 32% obtained further funding — i.e. a sustainability/business gap[^mackintosh-2025].
- NGI's own July 2024 impact figures, cited by FSFE: 57% of 1,000+ funded projects "offer viable alternatives to existing market solutions" and 74% continue after funding ends[^fsfe-2024].

# Why it matters for OIS applicants

- OIS topics are explicitly meant to "leverage the strong and active communities of European Open Source innovators which were supported in previous NGI topics"[^mackintosh-2025]; NGI-funded components are natural building blocks and partners.
- The criticisms recorded in 2024–2025 — micro-grants too small, fragmentation, no funding for maintenance/hosting, weak business models[^mackintosh-2025] — are exactly what the OIS topics now ask applicants to address (deployment, maintenance, cataloguing, sustainability).

# Related
- [/context/ngi-funding-controversy-2024.md](/context/ngi-funding-controversy-2024.md)
- [/context/emergence-of-open-internet-stack.md](/context/emergence-of-open-internet-stack.md)
- [/context/cascade-funding-explained.md](/context/cascade-funding-explained.md)
- [/organizations/nlnet.md](/organizations/nlnet.md)

[^ngi-about]: NGI.eu, About — https://ngi.eu/about/
[^ngi-faq]: NGI.eu, FAQ — https://ngi.eu/faq/
[^dsm-ngi]: Commission, Next Generation Internet initiative — https://digital-strategy.ec.europa.eu/en/policies/next-generation-internet-initiative
[^nlnet-ngi0]: NLnet, About NGI Zero — https://nlnet.nl/NGI0/
[^nlnet-stocktaking]: NLnet, 12 Jun 2026 — https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
[^mackintosh-2025]: Mackintosh, From NGI to Open Internet Stack (21 May 2025) — https://cdn.netzpolitik.org/wp-upload/2025/06/From_NGI_to_Open_Internet_Stack____Activating_the_European_open_digital_industry.pdf
[^fsfe-ngi0]: FSFE, NGI0 — https://fsfe.org/activities/ngi/ngi.en.html
[^ngi-forum-2025]: NGI.eu, NGI Forum 2025 — https://ngi.eu/news/2025/06/27/ngi-forum-2025-marks-a-strategic-shift-from-next-generation-internet-toward-the-open-internet-stack/
[^fsfe-2024]: FSFE, 19 Jul 2024 — https://fsfe.org/news/2024/news-20240719-01.en.html
