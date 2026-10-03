---
type: Category Guide
title: "Research & scientific software grants"
description: "Where academic labs, research software engineers and scientific open-source maintainers can get money in late 2026: U.S. federal programs (NSF PESOSE/CSSI, NIH ITCR/R50, NASA), philanthropy (OS4Science Fund, Sloan, Simons, Schmidt), and national RSE funds in the UK, Canada, Netherlands and Germany — with status after the 2025–26 changes."
category: research-software
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: nsf-26-506
    resource: https://www.nsf.gov/funding/opportunities/pesose-pathways-enable-secure-open-source-ecosystems/nsf26-506/solicitation
    title: "NSF 26-506 PESOSE"
  - id: nsf-cssi-page
    resource: https://www.nsf.gov/funding/opportunities/cssi-cyberinfrastructure-sustained-scientific-innovation
    title: "NSF CSSI program page"
  - id: cen-nsf-terminations
    resource: https://cen.acs.org/policy/research-funding/NSF-terminates-over-1000-grants/103/web/2025/05
    title: "C&EN: NSF terminates over 1,000 grants (May 2025)"
  - id: carpentries-pose
    resource: https://carpentries.org/blog/2025/06/announcing-withdrawal-of-nsf-pose-proposal/
    title: "The Carpentries: withdrawal of NSF POSE proposal"
  - id: nasa-os-funding
    resource: https://science.nasa.gov/open-science/nasa-open-science-funding-opportunities/
    title: "NASA Open Science Funding Opportunities"
  - id: czi-eoss
    resource: https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/
    title: "CZI EOSS page"
  - id: rp-os4s
    resource: https://www.renaissancephilanthropy.org/insights/open-source-for-science-fund-launches
    title: "Open Source for Science Fund launch (May 2026)"
  - id: os4ls
    resource: https://os4science.org/funding_opportunity/os4ls/
    title: "OS4LS call"
  - id: sloan-bss
    resource: https://sloan.org/programs/digital-technology/better-software-for-science
    title: "Sloan Better Software for Science"
  - id: sloan-ossci
    resource: https://sloan.org/programs/digital-technology/open-source-in-science
    title: "Sloan Open Source in Science"
  - id: oscars-calls
    resource: https://oscars-project.eu/open-calls
    title: "OSCARS open calls"
  - id: ssi-rsmf-r2-awards
    resource: https://www.software.ac.uk/news/announcing-19-projects-funded-through-research-software-maintenance-fund-round-2
    title: "RSMF Round 2 awards"
  - id: irs-rename
    resource: https://www.software.ac.uk/blog/introducing-institute-research-software
    title: "Introducing the Institute for Research Software"
  - id: osnl-esc
    resource: https://www.openscience.nl/en/news/open-science-nl-and-the-netherlands-escience-center-join-forces-to-boost-research-software-sustainability
    title: "Open Science NL + eScience Center"
  - id: sg-rfa-od-26-034
    resource: https://simpler.grants.gov/opportunity/67d97081-2134-43c3-8257-14a67f20222c
    title: "RFA-OD-26-034 forecast"
  - id: moore-ddd-eval
    resource: https://www.moore.org/docs/default-source/science---supporting-docs/data-driven-discovery-initiative-external-evaluation.pdf?sfvrsn=57456e0c_0
    title: "Moore Foundation: Data-Driven Discovery Initiative external evaluation"
  - id: ukri-sfrc
    resource: https://www.ukri.org/opportunity/software-for-research-communities/
    title: "UKRI/EPSRC Software for research communities (closed 2021)"
  - id: ardc-rsp
    resource: https://ardc.edu.au/program/research-software-program/
    title: "ARDC Research Software Program (complete)"
  - id: resa-news
    resource: https://www.researchsoft.org/news/
    title: "Research Software Alliance news / funding opportunities"
  - id: bssw-apply
    resource: https://bssw.io/pages/apply-for-the-bssw-fellowship-program
    title: "BSSw Fellowship"
  - id: guelph-rsmf
    resource: https://www.uoguelph.ca/research/alerts/content/research-software-maintenance-fund-lois-2026
    title: "Canada RSMF LOIs 2026"
  - id: rfa-ca-27-021
    resource: https://files.simpler.grants.gov/opportunities/0dbbed9f-dfa7-421b-b6f6-941de5a77342/attachments/00e91bf7-108f-45d0-8ed1-79a6ed6e1f08/RFA-CA-27-021-Full-Announcement.html
    title: "RFA-CA-27-021"
---

# Overview

Research software is the code that labs, observatories and consortia write and depend on: analysis libraries, simulation frameworks, pipelines, data services. It has its own funding ecosystem, separate from general open-source infrastructure money. Most of it is aimed at **organizations** (universities, labs, non-profits, fiscal hosts) rather than individuals, and most of it pays for **maintenance and sustainability** rather than new features.

**What changed in 2025–26:**

- **U.S. federal turbulence.** NSF terminated more than 1,000 grants in spring 2025 and added award certifications on DEI programs.[^cen-nsf-terminations] Some community organizations (e.g., The Carpentries) turned down POSE awards rather than accept them.[^carpentries-pose] POSE survived and was reissued as **PESOSE** (NSF 26-506) with a new security track and two deadlines a year.[^nsf-26-506] **CSSI**, NSF's core research-software program, did not get a 2026 deadline and is "awaiting a new solicitation".[^nsf-cssi-page] NASA's open-source science elements (OSTFL, HPOSS, TOPS) are all unsolicited.[^nasa-os-funding] The NIH ODSS sustainable-software R03 reissue has been stuck in "forecasted" status since February 2026.[^sg-rfa-od-26-034]
- **Philanthropy regrouped.** CZI's **EOSS** ($58M, 230+ projects over six cycles) ended. Its design moved into the **Open Source for Science Fund**, hosted by Renaissance Philanthropy and seeded with $20M by Biohub and Wellcome. Its first call (up to $250K or $1M) closed in July 2026.[^czi-eoss][^rp-os4s][^os4ls] Sloan closed *Better Software for Science* and continues with *Open Source in Science* (rolling LOIs, institution-focused).[^sloan-bss][^sloan-ossci]
- **National RSE funds grew outside the U.S.** The UK Research Software Maintenance Fund made 32 awards in 2025–26.[^ssi-rsmf-r2-awards] The Software Sustainability Institute became the **Institute for Research Software**.[^irs-rename] Canada launched its own RSMF (up to CA$500K).[^guelph-rsmf] Open Science NL put €5.4M into Dutch research-software sustainability through the eScience Center.[^osnl-esc] The EU's OSCARS cascade grants finished.[^oscars-calls]

# Best options by applicant profile

| Profile | Best current options |
|---|---|
| U.S. university lab with an adopted research tool | [NSF PESOSE](/programs/research-software/nsf-pesose.md) (governance/ecosystem/security; due 2027-03-02), [NCI ITCR](/programs/research-software/nci-itcr.md) (cancer, due 2026-10-19), [BRAIN U24](/programs/research-software/nih-brain-resource-u24.md) (neuro, due 2026-10-06); CSSI when reissued |
| Maintainer of a widely used life-science OSS library (any country) | [OS4Science Fund](/programs/research-software/os4science-open-source-life-sciences.md) (watch for the next call); [NumFOCUS SDG](/programs/research-software/numfocus-small-development-grants.md) if under NumFOCUS |
| U.S. staff RSE wanting salary stability | [NIH RSE Award R50](/programs/research-software/nih-rse-award-r50.md) (final due 2026-12-04); [Simons SSRFA](/programs/research-software/simons-scientific-software-faculty-award.md) (math/astro/physics, LOI each January) |
| Individual who wants to promote better practice | [BSSw Fellowship](/programs/research-software/bssw-fellowship.md) (U.S., $25K, due 2026-10-30); [IRS/SSI Fellowship](/programs/research-software/irs-ssi-fellowship.md) (UK, £4K, due 2026-10-05); [eScience RSSF](/programs/research-software/escience-rssf-fellowship.md) (NL) |
| UK-based maintainer | [UK RSMF](/programs/research-software/uk-research-software-maintenance-fund.md) (watch for round 3) |
| Canada-based maintainer | [Alliance RSMF](/programs/research-software/alliance-canada-rsmf.md) |
| Dutch researcher | [Open eScience Call](/programs/research-software/escience-open-escience-call.md), [OSS sustainability call](/programs/research-software/escience-open-sustainable-research-software.md) (in-kind RSE) |
| German infrastructure/library/computing center | [DFG Research Software Infrastructures](/programs/research-software/dfg-research-software-infrastructures.md) (March/August); [Helmholtz ScienceServe](/programs/research-software/helmholtz-scienceserve.md) if Helmholtz |
| EU research-infrastructure consortium | [Horizon Europe INFRAEOSC](/programs/research-software/horizon-europe-infraeosc.md) (2027 call 9 Mar – 15 Jun) |
| R or Julia package maintainer (small, scoped work) | [R Consortium ISC](/programs/research-software/r-consortium-isc-grants.md), [SciML small grants](/programs/research-software/sciml-small-grants.md), [rOpenSci Champions](/programs/research-software/ropensci-champions.md) |
| University building an OSPO / RSE career infrastructure | [Sloan Open Source in Science](/programs/research-software/sloan-open-source-in-science.md) (rolling) |
| U.S. HPC/DOE-ecosystem library | [DOE ASCR stewardship / CASS](/programs/research-software/doe-ascr-software-stewardship.md) (partner with a CASS member) |

# Comparison

| Program | Funder | Who | Size | Status | Next deadline | Effort |
|---|---|---|---|---|---|---|
| [NSF PESOSE](/programs/research-software/nsf-pesose.md) | [NSF](/funders/nsf.md) | U.S. orgs incl. companies | $300K–$1.5M | open | 2027-03-02 | high |
| [NSF CSSI](/programs/research-software/nsf-cssi.md) | [NSF](/funders/nsf.md) | U.S. academia/non-profits | $600K–$5M | paused | — | high |
| [NSF IDSS](/programs/research-software/nsf-oac-idss.md) | [NSF](/funders/nsf.md) | U.S. academia/non-profits | $500K–$30M | between rounds | 2027-07-27 | high |
| [NSF CICI](/programs/research-software/nsf-oac-cici.md) | [NSF](/funders/nsf.md) | U.S. academia/non-profits | $600K–$1.2M | open | 2027-01-20 | high |
| [BSSw Fellowship](/programs/research-software/bssw-fellowship.md) | [DOE](/funders/doe-office-of-science.md)/NSF | U.S.-affiliated individuals | ≤$25K | open | 2026-10-30 | low |
| [NIH ODSS R03](/programs/research-software/nih-sustainable-software-r03.md) | [NIH](/funders/nih.md) | broad, incl. foreign | ≈$300K (prior) | forecast | unconfirmed | high |
| [NIH RSE R50](/programs/research-software/nih-rse-award-r50.md) | [NIH](/funders/nih.md) | U.S. RSEs | ≤$300K/3 yrs | open | 2026-12-04 | medium |
| [NCI ITCR](/programs/research-software/nci-itcr.md) | [NIH](/funders/nih.md) | academia/orgs | $300K–$600K/yr | open | 2026-10-19 | high |
| [BRAIN U24](/programs/research-software/nih-brain-resource-u24.md) | [NIH](/funders/nih.md) | U.S. orgs | no cap | open | 2026-10-06 | high |
| [NASA OSTFL](/programs/research-software/nasa-roses-ostfl.md) | [NASA](/funders/nasa.md) | ROSES proposers | — | paused | — | high |
| [DOE ASCR stewardship](/programs/research-software/doe-ascr-software-stewardship.md) | [DOE](/funders/doe-office-of-science.md) | labs/partners | — | invite-only | — | high |
| [OS4Science OS4LS](/programs/research-software/os4science-open-source-life-sciences.md) | [Renaissance Philanthropy](/funders/renaissance-philanthropy.md) | orgs worldwide | ≤$250K / ≤$1M | between rounds | TBA | medium |
| [CZI EOSS](/programs/research-software/czi-eoss.md) | [CZI](/funders/chan-zuckerberg-initiative.md) | — | $100–400K | discontinued | — | — |
| [Sloan Open Source in Science](/programs/research-software/sloan-open-source-in-science.md) | [Sloan](/funders/sloan.md) | institutions | ~$100–400K | rolling | rolling | medium |
| [Sloan Better Software for Science](/programs/research-software/sloan-better-software-for-science.md) | [Sloan](/funders/sloan.md) | — | — | discontinued | — | — |
| [Schmidt VISS](/programs/research-software/schmidt-viss.md) | [Schmidt Sciences](/funders/schmidt-sciences.md) | host universities | in-kind RSE | invite-only | — | medium |
| [Simons SSRFA](/programs/research-software/simons-scientific-software-faculty-award.md) | [Simons](/funders/simons-foundation.md) | U.S. univ. + individual | salary + $250K | between rounds | ~Jan 2027 (unverified) | high |
| [UK RSMF](/programs/research-software/uk-research-software-maintenance-fund.md) | [UKRI](/funders/ukri.md) / [IRS](/funders/institute-for-research-software.md) | UK-led teams | ≤£150K–£500K | between rounds | TBA | medium |
| [IRS/SSI Fellowship](/programs/research-software/irs-ssi-fellowship.md) | [IRS](/funders/institute-for-research-software.md) | individuals (UK+) | £4K | open | 2026-10-05 | low |
| [Alliance RSMF](/programs/research-software/alliance-canada-rsmf.md) | [Alliance](/funders/digital-research-alliance-canada.md) | Canadian-led teams | ≤CA$150K/500K | between rounds | TBA | medium |
| [eScience OSS](/programs/research-software/escience-open-sustainable-research-software.md) | [eScience Center](/funders/netherlands-escience-center.md) | Dutch teams | ≤€250K (in-kind) | between rounds | TBA | medium |
| [Open eScience Call](/programs/research-software/escience-open-escience-call.md) | [eScience Center](/funders/netherlands-escience-center.md) | Dutch PIs | ≤3 PY RSE | between rounds | TBA (annual) | medium |
| [eScience RSSF](/programs/research-software/escience-rssf-fellowship.md) | [eScience Center](/funders/netherlands-escience-center.md) | NL individuals | €2K + 40 h | between rounds | TBA | low |
| [DFG FSI](/programs/research-software/dfg-research-software-infrastructures.md) | [DFG](/funders/dfg.md) | German institutions | no cap | between rounds | Mar/Aug 2027 | high |
| [Helmholtz ScienceServe](/programs/research-software/helmholtz-scienceserve.md) | [Helmholtz](/funders/helmholtz.md) | Helmholtz centres | ≤€200K | between rounds | — | medium |
| [INFRAEOSC](/programs/research-software/horizon-europe-infraeosc.md) | [European Commission](/funders/european-commission.md) | EU consortia | multi-€M | upcoming | 2027-06-15 | high |
| [OSCARS](/programs/research-software/oscars-open-science-calls.md) | [European Commission](/funders/european-commission.md) | — | €100–250K | discontinued | — | — |
| [NumFOCUS SDG](/programs/research-software/numfocus-small-development-grants.md) | [NumFOCUS](/funders/numfocus.md) | NumFOCUS projects | ≤$10K | between rounds | TBA | low |
| [R Consortium ISC](/programs/research-software/r-consortium-isc-grants.md) | [R Consortium](/funders/r-consortium.md) | anyone (R) | ~$4–10K | between rounds | ~spring 2027 | low |
| [SciML small grants](/programs/research-software/sciml-small-grants.md) | [NumFOCUS](/funders/numfocus.md) donors | individuals | $100–$2,250 | rolling | rolling | low |
| [rOpenSci Champions](/programs/research-software/ropensci-champions.md) | [rOpenSci](/funders/ropensci.md) | individuals | stipend | between rounds | TBA | low |

# Upcoming deadlines

Next six months (as of 2026-10-03):

| Date | Call |
|---|---|
| 2026-10-05 | [IRS/SSI Fellowship 2027](/calls/2026-10-05-irs-fellowship-2027.md) |
| 2026-10-06 | [NIH BRAIN U24](/calls/2026-10-06-nih-brain-u24.md) |
| 2026-10-19 | [NCI ITCR U01/U24](/calls/2026-10-19-nci-itcr.md) |
| 2026-10-30 | [BSSw Fellowship 2027](/calls/2026-10-30-bssw-fellowship-2027.md) |
| 2026-12-04 | [NIH RSE Award R50 (final)](/calls/2026-12-04-nih-rse-r50.md) |
| 2027-01-20 | [NSF CICI](/calls/2027-01-20-nsf-cici.md) |
| 2027-03-02 | [NSF PESOSE](/calls/2027-03-02-nsf-pesose.md) |
| 2027-03 | DFG Research Software Infrastructures (exact date unverified) |
| ~2027-01 | Simons SSRFA LOI (expected, unverified) |
| Later | [INFRAEOSC 2027](/calls/2027-06-15-horizon-infra-2027-infraeosc.md) (opens 2027-03-09), [NSF IDSS](/calls/2027-07-27-nsf-idss.md) |

# Tips

- **Pay for maintenance and community, not features.** Almost every program here (PESOSE, CSSI Transition, ITCR sustainment, UK and Canada RSMF, eScience OSS, OS4Science) explicitly rejects brand-new software. Show adoption (users, citations, dependents) and a roadmap the maintainers agree on.[^os4ls][^guelph-rsmf]
- **Get a fiscal host early.** OS4Science grants go only to organizations. Independent projects need a sponsor such as NumFOCUS or Code for Science & Society.[^os4ls]
- **Check the award terms, not just eligibility.** U.S. federal awards in 2025–26 carry new certifications.[^carpentries-pose] NIH no longer funds foreign subawards unless the NOFO allows them.[^rfa-ca-27-021]
- **In-kind RSE time is real funding.** The Dutch eScience calls and Schmidt VISS give you engineers, not cash. Plan scientific collaboration time accordingly.[^osnl-esc]
- **Use ReSA's research-software funding listings** to track new calls; ReSA newsletters list them monthly.[^resa-news]
- **Fellowships are low-effort entry points.** BSSw ($25K, U.S.) and the IRS/SSI Fellowship (£4K, UK) build visibility that helps with larger grants later.[^bssw-apply]

# Discontinued or paused programs

- **CZI Essential Open Source Software for Science (EOSS)**: ended after six cycles (last LOIs October 2023). The CZI page says it is not accepting applications. Succeeded by the Open Source for Science Fund.[^czi-eoss][^rp-os4s]
- **NSF CSSI**: paused; waiting for a new solicitation after the December 1, 2025 deadline.[^nsf-cssi-page]
- **NASA ROSES OSTFL / HPOSS / SOSS / TOPS-T**: not currently solicited. ROSES-2026 had not been released by late August 2026.[^nasa-os-funding]
- **NIH ODSS Building Sustainable Software Tools R03**: 2026 reissue forecast but not confirmed.[^sg-rfa-od-26-034]
- **Sloan Better Software for Science**: no longer accepting proposals; replaced by Open Source in Science.[^sloan-bss]
- **OSCARS cascading grants (EU)**: both calls done, no more planned.[^oscars-calls]
- **Moore Foundation Data-Driven Discovery Initiative**: closed in 2021 after investing more than $80M (data science environments, investigators).[^moore-ddd-eval]
- **EPSRC Software for Research Communities / RSE development calls (UK, 2021)**: one-off and closed. The RSMF is the current UK channel.[^ukri-sfrc]
- **ARDC Research Software Program (Australia)**: ran 2022–2023 and is marked complete. No open ARDC research-software grant call was found for 2026.[^ardc-rsp]

[^nsf-26-506]: [NSF 26-506](https://www.nsf.gov/funding/opportunities/pesose-pathways-enable-secure-open-source-ecosystems/nsf26-506/solicitation)
[^nsf-cssi-page]: [NSF CSSI](https://www.nsf.gov/funding/opportunities/cssi-cyberinfrastructure-sustained-scientific-innovation)
[^cen-nsf-terminations]: [C&EN, May 2025](https://cen.acs.org/policy/research-funding/NSF-terminates-over-1000-grants/103/web/2025/05)
[^carpentries-pose]: [The Carpentries](https://carpentries.org/blog/2025/06/announcing-withdrawal-of-nsf-pose-proposal/)
[^nasa-os-funding]: [NASA open science funding](https://science.nasa.gov/open-science/nasa-open-science-funding-opportunities/)
[^czi-eoss]: [CZI EOSS](https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/)
[^rp-os4s]: [Renaissance Philanthropy](https://www.renaissancephilanthropy.org/insights/open-source-for-science-fund-launches)
[^os4ls]: [OS4LS](https://os4science.org/funding_opportunity/os4ls/)
[^sloan-bss]: [Sloan BSS](https://sloan.org/programs/digital-technology/better-software-for-science)
[^sloan-ossci]: [Sloan OSiS](https://sloan.org/programs/digital-technology/open-source-in-science)
[^oscars-calls]: [OSCARS](https://oscars-project.eu/open-calls)
[^ssi-rsmf-r2-awards]: [RSMF R2 awards](https://www.software.ac.uk/news/announcing-19-projects-funded-through-research-software-maintenance-fund-round-2)
[^irs-rename]: [IRS rename](https://www.software.ac.uk/blog/introducing-institute-research-software)
[^osnl-esc]: [Open Science NL](https://www.openscience.nl/en/news/open-science-nl-and-the-netherlands-escience-center-join-forces-to-boost-research-software-sustainability)
[^sg-rfa-od-26-034]: [RFA-OD-26-034](https://simpler.grants.gov/opportunity/67d97081-2134-43c3-8257-14a67f20222c)
[^moore-ddd-eval]: [Moore DDD evaluation](https://www.moore.org/docs/default-source/science---supporting-docs/data-driven-discovery-initiative-external-evaluation.pdf?sfvrsn=57456e0c_0)
[^ukri-sfrc]: [UKRI Software for research communities](https://www.ukri.org/opportunity/software-for-research-communities/)
[^ardc-rsp]: [ARDC Research Software Program](https://ardc.edu.au/program/research-software-program/)
[^resa-news]: [ReSA news](https://www.researchsoft.org/news/)
[^bssw-apply]: [BSSw](https://bssw.io/pages/apply-for-the-bssw-fellowship-program)
[^guelph-rsmf]: [Canada RSMF](https://www.uoguelph.ca/research/alerts/content/research-software-maintenance-fund-lois-2026)
[^rfa-ca-27-021]: [RFA-CA-27-021](https://files.simpler.grants.gov/opportunities/0dbbed9f-dfa7-421b-b6f6-941de5a77342/attachments/00e91bf7-108f-45d0-8ed1-79a6ed6e1f08/RFA-CA-27-021-Full-Announcement.html)
