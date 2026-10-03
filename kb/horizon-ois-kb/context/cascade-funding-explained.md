---
type: Context
title: "Cascade funding (FSTP) in Horizon Europe — how it works for Open Internet Stack applicants"
description: How Financial Support to Third Parties (FSTP / "open calls" / cascade funding) works in Horizon Europe — the €60,000 default cap and the OIS exceptions (€150k, €400k), publication and openness rules, sub-grant contracts, milestone payments, reporting — and how it differs from joining a consortium grant.
tags: [open-internet-stack, cluster-4, cascade-funding, fstp, open-calls, ngi, rules]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mga
    title: "Horizon Europe General Model Grant Agreement (HE MGA — Multi & Mono), Article 9.4 and Annex 1"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/agr-contr/general-mga_horizon-euratom_en.pdf
    accessed: 2026-10-03
  - id: aga
    title: "AGA — Annotated Grant Agreement V2.0 (01.04.2025), Articles 6.2.D.1 and 9.4"
    resource: https://www.eiturbanmobility.eu/wp-content/uploads/2025/12/Horizon-Europe-Annotated-Grant-Agreement-AGA.pdf
    accessed: 2026-10-03
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027, General Annexes (Annex XV) — 'Financial support to third parties'"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
    accessed: 2026-10-03
  - id: wp2025
    title: "Horizon Europe Work Programme 2025, Part 7 Digital, Industry and Space (topics DATA-11, HUMAN-16)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2025/wp-7-digital-industry-and-space_horizon-2025_en.pdf
    accessed: 2026-10-03
  - id: wp2627
    title: "Horizon Europe Work Programme 2026-2027, Part 7 Digital, Industry and Space (topic HORIZON-CL4-2026-04-DATA-02)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-7-digital-industry-and-space_horizon-2026-2027_en.pdf
    accessed: 2026-10-03
  - id: restack-guide
    title: "NLnet — Restack Guide for Applicants"
    resource: https://nlnet.nl/restack/guideforapplicants/
    accessed: 2026-10-03
  - id: restack-faq
    title: "NLnet — Restack FAQ"
    resource: https://nlnet.nl/restack/faq/
    accessed: 2026-10-03
  - id: codesupply-guide
    title: "NLnet — CodeSupply Guide for Applicants"
    resource: https://nlnet.nl/codesupply/guideforapplicants/
    accessed: 2026-10-03
  - id: ngisearch-oc5
    title: "NGI Search 5th Open Call — Guide for Applicants (FundingBox / Aarhus University)"
    resource: https://onepass-public.s3-eu-central-1.amazonaws.com/ats/opportunities/ngi-search-5th-open-call/hLGCu67xiv/ngi_search_guideforapplicants_oc5.pdf
    accessed: 2026-10-03
  - id: trustchain-faq
    title: "NGI TrustChain FAQ"
    resource: https://trustchain.ngi.eu/faq/
    accessed: 2026-10-03
  - id: nlnet-stocktaking
    title: "NLnet — Transitioning from NGI to Open Internet Stack — open calls temporarily paused (2026-06-12)"
    resource: https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html
    accessed: 2026-10-03
  - id: ft-cascade
    title: "EU Funding & Tenders Portal — cascade funding listing for the Restack open call (2026-11R)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/competitive-calls-cs/48400841
    accessed: 2026-10-03
---

# What cascade funding is

In Horizon Europe a consortium that wins a grant can, if the topic allows it, re-distribute part of its
EU budget to outside "third parties" through its own open calls. The Commission calls this **financial
support to third parties (FSTP)**; the community calls it *cascade funding* or *open calls*. The money is
a budget category of the main grant ("costs of providing financial support to third parties"), and the
third party signs a contract with the consortium, not with the Commission.[^ga-2026][^mga]

For the Open Internet Stack (OIS) and its predecessor Next Generation Internet (NGI), cascade funding is
the main way individuals, small teams and SMEs get EU money without writing a Horizon Europe proposal or
joining a consortium. NLnet alone reports more than 10,000 applications and about 1,215 funded projects
across five NGI Zero programmes.[^nlnet-stocktaking]

# The rules the main grant must follow

General conditions in the Work Programme General Annexes, which apply to every Horizon Europe FSTP
scheme:[^ga-2026]

- The proposal must describe the objectives and expected results of the FSTP.
- Open calls must be **published widely** and follow EU standards of transparency, equal treatment,
  conflict of interest and confidentiality.
- All calls must be published **on the EU Funding & Tenders Portal** (as "cascade funding" entries) and
  on the beneficiaries' websites. Example: Restack's first call is listed on the portal under topic
  HORIZON-CL4-2025-03-DATA-11.[^ft-cascade]
- Calls must stay **open for at least 2 months**. Deadline changes must be announced and registered
  applicants informed.
- Results must be published without delay: project description, award date, duration, legal name and
  country of each third party.
- Calls must have a **clear European dimension**.

## The per-third-party cap: €60,000 by default

Under Article 9.4 of the Model Grant Agreement, financial support **may not exceed EUR 60 000 per third
party**, unless the call/topic explicitly sets a higher amount because the objective would otherwise be
impossible or overly difficult to achieve (Article 207 of the EU Financial Regulation 2024/2509). The
higher amount has to be announced in the call and agreed with the granting authority.[^mga][^aga] The grant agreement also has to set out how
amounts are calculated, which activities qualify, who can receive support, and the selection
criteria.[^mga]

The OIS topics use this exception a lot:

| Topic | Max per third party | Max share of EU contribution for FSTP | Typical sub-project |
|---|---|---|---|
| HORIZON-CL4-2025-03-DATA-11 (OIS technological commons, RIA) — funded **Restack** | EUR 400 000 (allows repeat awards and maturing projects) | up to 70% | EUR 50 000–150 000, 9–12 months[^wp2025] |
| HORIZON-CL4-2025-03-HUMAN-16 (Web 4.0 building blocks, RIA) — funded **CodeSupply**, **ELFA** | EUR 150 000 (repeat participation over the pilot) | up to 15% | not specified[^wp2025] |
| HORIZON-CL4-2026-04-DATA-02 (OIS Sovereign Solutions, RIA; deadline 15 Apr 2026) | EUR 400 000 | up to 80% | not specified[^wp2627] |

The operator can set a **lower** cap. CodeSupply caps support at EUR 60 000 per third party over the
programme's lifetime[^codesupply-guide]. Restack's guide sets EUR 50 000 for a first proposal, EUR 150 000
per proposal, and EUR 500 000 per third party over the programme's lifetime.[^restack-guide]
(The Restack lifetime cap is higher than the EUR 400 000 in the DATA-11 topic text. This KB has not been
able to explain the difference; treat the published guide as binding for applicants and confirm with
NLnet.)

The topics also say that **running the programme** (programme logic, project lifecycle management,
technical and non-technical support) cannot be paid from the money set aside for third
parties.[^wp2025][^wp2627]

# What it looks like from the applicant's side

| | Cascade (FSTP) sub-grant | Direct Horizon Europe consortium grant |
|---|---|---|
| Who applies | Individuals, informal teams, SMEs, NGOs, universities. NLnet funds natural persons without a legal entity[^restack-faq] | Legal entities in a consortium (usually ≥3 from different countries for RIA/IA) |
| Proposal effort | Short web form, usually a few pages | 45–70 page Part B, consortium building, Portal registration (PIC) |
| Amount | €5k–€150k per project; usually ≤€60k unless the topic allows more | €1M–€10M+ per project |
| Cadence | Rolling or bimonthly cut-offs (NLnet: 3rd of every odd month), or numbered calls | Annual call deadlines |
| Contract | Sub-grant agreement or Memorandum of Understanding with the operator[^restack-faq][^ngisearch-oc5] | Grant Agreement with the EU granting authority (REA/HaDEA) |
| Payment | After each milestone is delivered, usually no pre-financing[^restack-faq][^ngisearch-oc5] | Pre-financing, then periodic payments |
| Reporting | Milestone deliverables (public code, docs), light check by operator | Periodic technical and financial reports, reviews, audits |
| Time to decision | NLnet: 3–5 months after the call deadline[^restack-faq]; NGI accelerator-style calls ≈3 months[^trustchain-faq] | ≈5 months to result, ≈8 months to grant signature |
| IP / licence | Results under a recognised free/open-source licence (NLnet, NGI)[^restack-guide][^ngisearch-oc5] | Consortium agreement; open-source expectations set by topic |
| Ineligible people | Consortium partners, their staff and affiliates (conflict of interest)[^ngisearch-oc5] | — |

## Payment mechanics in practice

- **NLnet model (Restack, CodeSupply, earlier NGI Zero)**: grants are donations, treated as charitable
  gifts where NLnet's Dutch public-benefit status applies. Tax treatment in the recipient's country varies.
  There is no up-front payment. You split the project into milestones and request payment when each one
  is done. Projects over €50k may need an independent security audit, and part of the payment can depend
  on its outcome.[^restack-faq][^restack-guide]
- **Accelerator model (NGI Search via FundingBox, TrustChain, Sargasso)**: you sign a sub-grant agreement
  with the consortium. The grant is a lump sum paid against deliverables and milestones set in an
  individual mentoring plan, and a committee approves each milestone before payment. In NGI Search the
  coordinator, Aarhus University, paid on behalf of the consortium. A lump sum still means you keep
  normal fiscal records.[^ngisearch-oc5]
- Many accelerator-style calls cap natural persons lower than legal entities. NGI Search allowed €50k per
  natural person and €150k per entity, summed across all its calls.[^ngisearch-oc5] TrustChain allowed
  up to €117k per call and €200k per applicant across all calls.[^trustchain-faq]

# How to use this as an OIS applicant

1. **Individuals and small teams**: cascade funding is the realistic route. Start with an NLnet-run
   programme ([Restack](/cascade/nlnet-restack.md), [CodeSupply](/cascade/nlnet-codesupply.md)).
   They have bimonthly deadlines and accept proposals in English from individuals.
2. **Growing projects**: Restack lets you scale from €50k to €150k per proposal, and up to €500k in
   total, after successful earlier work. Earlier NGI Zero grants count as "equivalent" track
   record.[^restack-guide]
3. **Organisations wanting to *run* a cascade**: the 2026 Sovereign Solutions topic (up to 80% FSTP,
   €400k per third party) is the main vehicle. Its winners should open new calls from 2027. See
   [OIS Sovereign Solutions FSTP](/cascade/ois-sovereign-solutions-fstp.md).
4. You can hold a cascade grant and be a consortium partner in a different action, but not get two EU
   payments for the same work. Check each programme's double-funding rules.

# Related

- [Cascade funds index](/cascade/index.md)
- [Complementary programmes](/context/complementary-programmes.md)
- [NLnet](/organizations/nlnet.md)

[^mga]: Horizon Europe General MGA, Art. 9.4 and Data Sheet footnote on FSTP maximum amount.
[^aga]: AGA v2.0, Art. 6.2.D.1 and 9.4.
[^ga-2026]: WP 2026-2027 General Annexes, section "Financial support to third parties".
[^wp2025]: WP 2025 Part 7, topic conditions for HORIZON-CL4-2025-03-DATA-11 and -HUMAN-16.
[^wp2627]: WP 2026-2027 Part 7, topic conditions for HORIZON-CL4-2026-04-DATA-02.
[^restack-guide]: NLnet Restack Guide for Applicants.
[^restack-faq]: NLnet Restack FAQ.
[^nlnet-stocktaking]: NLnet news, 12 June 2026.
[^codesupply-guide]: NLnet CodeSupply Guide for Applicants.
[^ngisearch-oc5]: NGI Search OC5 Guide for Applicants, sections 3, 6 and 7.
[^trustchain-faq]: NGI TrustChain FAQ.
[^ft-cascade]: F&T Portal cascade listing 48400841.
