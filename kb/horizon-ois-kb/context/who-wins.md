---
type: Context
title: "Who wins Open Internet Stack and NGI grants"
description: "Data analysis of the 21 Horizon Europe NGI-era and Open Internet Stack grants (€132.4M EU contribution) plus WP2025/2026 evaluation statistics: who coordinates, from where, with what consortium size and budget split, which organisations recur, and what the winners have in common."
tags: [open-internet-stack, next-generation-internet, cluster-4, analysis, consortia, success-rates]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cordis-restack
    resource: https://cordis.europa.eu/project/id/101299072
    title: "CORDIS: Restack (101299072)"
  - id: cordis-codesupply
    resource: https://cordis.europa.eu/project/id/101298846
    title: "CORDIS: CodeSupply (101298846)"
  - id: cordis-elfa
    resource: https://cordis.europa.eu/project/id/101298715
    title: "CORDIS: ELFA (101298715)"
  - id: cordis-twine
    resource: https://cordis.europa.eu/project/id/101298722
    title: "CORDIS: TWINE (101298722)"
  - id: cordis-wise4
    resource: https://cordis.europa.eu/project/id/101298767
    title: "CORDIS: WISE4 (101298767)"
  - id: cordis-entrust
    resource: https://cordis.europa.eu/project/id/101069594
    title: "CORDIS: NGI0 Entrust (101069594)"
  - id: cordis-core
    resource: https://cordis.europa.eu/project/id/101092990
    title: "CORDIS: NGI0 Core (101092990)"
  - id: cordis-commons
    resource: https://cordis.europa.eu/project/id/101135429
    title: "CORDIS: NGI0 Commons Fund (101135429)"
  - id: cordis-search
    resource: https://cordis.europa.eu/project/id/101069364
    title: "CORDIS: NGI Search (101069364)"
  - id: cordis-ows
    resource: https://cordis.europa.eu/project/id/101070014
    title: "CORDIS: OpenWebSearch.eu (101070014)"
  - id: cordis-trustchain
    resource: https://cordis.europa.eu/project/id/101093274
    title: "CORDIS: TrustChain (101093274)"
  - id: cordis-sargasso
    resource: https://cordis.europa.eu/project/id/101092887
    title: "CORDIS: NGI Sargasso (101092887)"
  - id: cordis-transoceanic
    resource: https://cordis.europa.eu/project/id/101134993
    title: "CORDIS: NGI TRANSOCEANIC (101134993)"
  - id: cordis-taler
    resource: https://cordis.europa.eu/project/id/101135475
    title: "CORDIS: TALER (101135475)"
  - id: cordis-mobifree
    resource: https://cordis.europa.eu/project/id/101135795
    title: "CORDIS: MOBIFREE (101135795)"
  - id: cordis-fediversity
    resource: https://cordis.europa.eu/project/id/101136078
    title: "CORDIS: Fediversity (101136078)"
  - id: cordis-ngicommons
    resource: https://cordis.europa.eu/project/id/101135279
    title: "CORDIS: NGI Commons (101135279)"
  - id: cordis-ngi-search-query
    resource: "https://cordis.europa.eu/search/en?q=contenttype%3D%27project%27%20AND%20programme%2Fcode%3D%27HORIZON.2.4.6%27"
    title: "CORDIS search: all projects under legal basis HORIZON.2.4.6 'Next Generation Internet'"
  - id: tt-data11
    resource: https://topictree.eu/topic/6433
    title: "TopicTree: HORIZON-CL4-2025-03-DATA-11 evaluation results"
  - id: tt-human16
    resource: https://topictree.eu/topic/6423
    title: "TopicTree: HORIZON-CL4-2025-03-HUMAN-16 evaluation results"
  - id: tt-data02
    resource: https://topictree.ideal-ist.eu/topic/7109
    title: "TopicTree: HORIZON-CL4-2026-04-DATA-02 evaluation results"
  - id: tt-data03
    resource: https://topictree.ideal-ist.eu/topic/7101?view=results
    title: "TopicTree: HORIZON-CL4-2026-04-DATA-03 evaluation results"
  - id: nlnet-stocktaking
    resource: https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
    title: "NLnet: Transitioning from NGI to Open Internet Stack (2026-06-12)"
  - id: nlnet-elfa
    resource: https://nlnet.nl/ELFA/
    title: "NLnet: ELFA page (withdrawal notice)"
---
# Summary
The dataset is the 21 Horizon Europe grants of the NGI line and its WP2025 Open Internet Stack (OIS) continuation that are on CORDIS: 16 NGI-era grants (2022–2024 starts) and 5 WP2025 grants (Restack plus the four HUMAN-16 Web 4.0 building-block projects). NOVA (a CSA) and the €75M EURO-3C pilot are left out because they are adjacent projects. Together the 21 grants carry **€132.4M** of EU contribution. All figures below come from the CORDIS factsheets linked in each [/projects/](/projects/index.md) page[^cordis-ngi-search-query]. There are three findings:

1. **One organisation dominates.** NLnet (NL) coordinates 8 of the 21 grants and receives **€56.2M, 42% of all the money**[^cordis-entrust][^cordis-core][^cordis-commons][^cordis-restack]. Nearly all of it is passed on as €5k–50k third-party grants.
2. **Calls are small and competitive at the top, but the OIS RIA itself drew few bids.** The WP2025 OIS topic DATA-11 received only **4 proposals for 1 grant**[^tt-data11]. The WP2025 Web 4.0 building-block topic HUMAN-16 funded **4 of 34** (threshold 13.5)[^tt-human16]. The WP2026 OIS Sovereign Solutions topic retained **3 of 31** (threshold 14.0)[^tt-data02].
3. **Winners are open-source-native organisations with a track record from earlier NGI grants**, not classic Horizon research consortia.

# Who coordinates
| Coordinator country | Grants | Coordinators |
|---|---|---|
| NL | 12 | NLnet ×8, Martel Innovate ×2, TU Eindhoven, Centric |
| FR | 3 | European Science Foundation, GAC, e Foundation |
| BE, DE, DK, EL, IE, LU | 1 each | imec, Univ. Passau, Aarhus Univ., EXAPSYS, SETU, European Dynamics |

By CORDIS activity type, the 21 coordinators are 10 "other" (foundations and associations such as NLnet, e Foundation and ESF), 6 private companies, 4 higher-education institutions and 1 research organisation[^cordis-ngi-search-query]. Pure research-university coordination is rare. The universities that coordinated (Aarhus for NGI Search, SETU for NGI TRANSOCEANIC, Passau for OpenWebSearch.eu, TU/e for TALER) won search, international-cooperation or pilot topics[^cordis-search][^cordis-transoceanic][^cordis-ows][^cordis-taler]. None of them won an open-source commons fund.

# Consortium size and budget split
- **Beneficiaries per grant** range from 3 to 15, with a **median of 9**[^cordis-ngi-search-query]. Cascade-heavy RIAs are lean: NGI Search had 5 beneficiaries and NGI Sargasso 4, while NGI Zero and Restack have 11–15, mostly to supply support services[^cordis-search][^cordis-sargasso][^cordis-restack].
- **Budgets:**
  - Cascade RIAs: €6–27.5M (NGI0 Commons Fund €27.5M, NGI0 Entrust €12.5M, NGI0 Core €11.5M, TrustChain €10.6M, Restack €10.0M)[^cordis-commons][^cordis-entrust][^cordis-core][^cordis-trustchain][^cordis-restack].
  - WP2023 pilots (IA): €1.8–4.5M.
  - WP2025 HUMAN-16 RIAs: about €3M each[^cordis-codesupply][^cordis-elfa][^cordis-twine][^cordis-wise4].
  - CSAs: €1.5–2M.
- **Coordinator share** splits into two models:
  - In FSTP grants the coordinator holds 78–89% because it re-grants the money. Examples: NGI0 Entrust 87%, NGI Search 85%, TrustChain 86%, NGI TRANSOCEANIC 89%, Restack 78%[^cordis-entrust][^cordis-search][^cordis-trustchain][^cordis-transoceanic][^cordis-restack].
  - In technology RIAs and IAs the coordinator holds 8–35%. Examples: OpenWebSearch.eu 8%, TALER 17%, ELFA 15%, MOBIFREE 35%[^cordis-ows][^cordis-taler][^cordis-elfa][^cordis-mobifree].
- **Who participates:** 169 beneficiary slots. 61 are "other" (non-profits and foundations), 59 private companies, 27 higher education, 19 research organisations and 3 public bodies. 76 slots are flagged SME[^cordis-ngi-search-query]. By country, NL has 52 slots, DE 25, ES 18, BE 16, FR 16 and IE 7. Central and Eastern Europe is thin: CZ 4, and single slots for PL, RO, HU, BG, LT, EE and RS[^cordis-ngi-search-query].

# Recurring winners
- **The NLnet circle.** The same eight partners sit in every NGI Zero grant (Entrust, Core, Commons Fund, Review) and again in Restack[^cordis-entrust][^cordis-core][^cordis-commons][^cordis-restack]:
  - FSFE
  - Radically Open Security
  - HAN University of Applied Sciences
  - Tolerant Networks
  - Center for the Cultivation of Technology
  - Commons Caretakers
  - APC
  - NixOS Foundation

  Brno University of Technology and Petites Singularités sat in three NGI grants each. OW2, OpenForum Europe and the Edsger Institute appear in three each[^cordis-commons][^cordis-fediversity][^cordis-codesupply]. See [/organizations/index.md](/organizations/index.md).
- **Cascade-operator consultancies** run the international and outreach grants: Martel Innovate (NGI4ALL.E, NGI Commons), GAC (NGI Enrichers), FundingBox (NGI Search, NGI4ALL.E), F6S (TrustChain) and Trust-IT/EURESCOM (NGI TRANSOCEANIC)[^cordis-search][^cordis-trustchain][^cordis-transoceanic].
- **Product-owning FOSS organisations** win pilots and building-block grants. Examples are Taler Systems for GNU Taler, e Foundation and Murena for /e/OS, NextGraph and XWiki for ELFA, and AboutCode for CodeSupply[^cordis-taler][^cordis-mobifree][^cordis-elfa][^cordis-codesupply].

# What successful proposals have in common
These are observations drawn from the data above, not EC guidance.
- **An existing, deployed open-source asset.** The proposals extend software that earlier NGI cascade grants already funded. TALER cites funding from NGI0 PET, NGI0 Entrust, NGI POINTER and NGI TRUST[^cordis-taler]. ELFA builds on NextGraph and CodeSupply on PURL tooling[^cordis-elfa][^cordis-codesupply].
- **A credible operator plan for third-party funding** where the topic allows FSTP. Every large grant is a re-granting machine with a proven pipeline. NLnet cites ~8,500 applications and 1,215 funded NGI Zero projects[^nlnet-stocktaking].
- **Support services as work packages:** security audits, accessibility, licensing/REUSE, reproducible packaging (Nix) and standardisation, each allocated to a specialist partner[^cordis-entrust][^cordis-restack].
- **Small, purpose-built consortia.** WP2025 HUMAN-16 winners have 4–11 beneficiaries for ~€3M[^cordis-codesupply][^cordis-elfa][^cordis-twine][^cordis-wise4].
- **Explicit links to the policy agenda.** Restack ties itself to the 3C large-scale pilot, Web 4.0, the Virtual Worlds Partnership and the Digital Networks Act[^cordis-restack]. TWINE ties itself to Living-in.EU and Interoperable Europe[^cordis-twine].

# Risks seen in the data
- **NGI TRANSOCEANIC is listed as TERMINATED on CORDIS**, and its calls never opened on its site. Joint EU–US schemes carry partner-side risk[^cordis-transoceanic].
- **NLnet withdrew from ELFA in August 2026** although CORDIS still shows it as coordinator. ELFA's open calls are postponed until another operator takes over[^nlnet-elfa][^cordis-elfa].
- **Partners do drop out:** Qwant (MOBIFREE) and Linux Foundation Europe (NGI Commons) are flagged as terminated participants[^cordis-mobifree][^cordis-ngicommons].

# WP2026-2027 outlook
- HORIZON-CL4-2026-04-DATA-02 "Open Internet Stack Sovereign Solutions" (RIA, €20.5M, €7–10.25M per grant, deadline 15 Apr 2026) received 31 proposals. 24 were above threshold, 3 retained and 1 on the reserve list, with a threshold of 14.00[^tt-data02].
- HORIZON-CL4-2026-04-DATA-03 "Open Internet Stack Support for Scale" (CSA, €4M) received 6 proposals. 2 were ineligible, 2 above threshold and 1 retained[^tt-data03].
- The winners' names are not yet on CORDIS (checked 2026-10-03). Expect grant signature and CORDIS publication around late 2026. **Unverified:** who the DATA-02 and DATA-03 winners are.

# Related
- [/projects/index.md](/projects/index.md)
- [/organizations/index.md](/organizations/index.md)
- [/projects/restack.md](/projects/restack.md)
- [/organizations/nlnet.md](/organizations/nlnet.md)

[^cordis-restack]: CORDIS: Restack — https://cordis.europa.eu/project/id/101299072
[^cordis-codesupply]: CORDIS: CodeSupply — https://cordis.europa.eu/project/id/101298846
[^cordis-elfa]: CORDIS: ELFA — https://cordis.europa.eu/project/id/101298715
[^cordis-twine]: CORDIS: TWINE — https://cordis.europa.eu/project/id/101298722
[^cordis-wise4]: CORDIS: WISE4 — https://cordis.europa.eu/project/id/101298767
[^cordis-entrust]: CORDIS: NGI0 Entrust — https://cordis.europa.eu/project/id/101069594
[^cordis-core]: CORDIS: NGI0 Core — https://cordis.europa.eu/project/id/101092990
[^cordis-commons]: CORDIS: NGI0 Commons Fund — https://cordis.europa.eu/project/id/101135429
[^cordis-search]: CORDIS: NGI Search — https://cordis.europa.eu/project/id/101069364
[^cordis-ows]: CORDIS: OpenWebSearch.eu — https://cordis.europa.eu/project/id/101070014
[^cordis-trustchain]: CORDIS: TrustChain — https://cordis.europa.eu/project/id/101093274
[^cordis-sargasso]: CORDIS: NGI Sargasso — https://cordis.europa.eu/project/id/101092887
[^cordis-transoceanic]: CORDIS: NGI TRANSOCEANIC — https://cordis.europa.eu/project/id/101134993
[^cordis-taler]: CORDIS: TALER — https://cordis.europa.eu/project/id/101135475
[^cordis-mobifree]: CORDIS: MOBIFREE — https://cordis.europa.eu/project/id/101135795
[^cordis-fediversity]: CORDIS: Fediversity — https://cordis.europa.eu/project/id/101136078
[^cordis-ngicommons]: CORDIS: NGI Commons — https://cordis.europa.eu/project/id/101135279
[^cordis-ngi-search-query]: CORDIS search, legal basis HORIZON.2.4.6 (aggregated by this KB from the per-project factsheets)
[^tt-data11]: TopicTree: HORIZON-CL4-2025-03-DATA-11 — https://topictree.eu/topic/6433
[^tt-human16]: TopicTree: HORIZON-CL4-2025-03-HUMAN-16 — https://topictree.eu/topic/6423
[^tt-data02]: TopicTree: HORIZON-CL4-2026-04-DATA-02 — https://topictree.ideal-ist.eu/topic/7109
[^tt-data03]: TopicTree: HORIZON-CL4-2026-04-DATA-03 — https://topictree.ideal-ist.eu/topic/7101
[^nlnet-stocktaking]: NLnet stocktaking news — https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
[^nlnet-elfa]: NLnet ELFA page — https://nlnet.nl/ELFA/
