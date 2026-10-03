---
type: Organization
title: Anaconda, Inc.
description: Austin-based steward of the Anaconda Distribution and the commercial "defaults" conda channel; turned aggressive ToS enforcement and enterprise AI positioning into >$150M ARR, a $1.5B Series C (July 2025), a new CEO (Oct 2025) and a 2026 acquisition spree (Outerbounds, Kilo Code, Enkrypt AI) at a reported >$2B valuation.
resource: https://www.anaconda.com
tags: [commercial-open-source, python, conda, data-science, enterprise-ai, terms-of-service, acquirer]
org_kind: coss-startup
hq: Austin, Texas, USA
funding: { total_usd: "unverified (Series C >$150M in July 2025)", last_round: "Series C (>$150M, Insight Partners lead, Mubadala Capital)", last_round_date: 2025-07-31, valuation_usd: "~$1.5B (July 2025); >$2B per CEO after Kilo Code deal (July 2026, reported)" }
business_verdict: growing
projects: [projects/scientific-computing/conda, projects/scientific-computing/conda-forge, projects/ai-agents/kilo-code]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: yahoo-series-c
    resource: https://tech.yahoo.com/ai/articles/ai-startup-anaconda-raises-150-142155568.html
    title: "Reuters via Yahoo: AI startup Anaconda valued at $1.5 billion in Series C funding (2025-07-31)"
  - id: bw-series-c
    resource: https://www.businesswire.com/news/home/20250730399625/en/Anaconda-Raises-Over-%24150M-in-Series-C-Funding-to-Power-AI-for-the-Enterprise
    title: "Business Wire: Anaconda Raises Over $150M in Series C Funding"
  - id: bw-desanto
    resource: https://www.businesswire.com/news/home/20251016933385/en/Anaconda-Names-David-DeSanto-as-Chief-Executive-Officer
    title: "Business Wire: Anaconda Names David DeSanto as CEO (2025-10-16)"
  - id: register-tos
    resource: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
    title: "The Register: Anaconda puts the squeeze on data scientists (2024-08-08)"
    author: org:the-register
  - id: anaconda-academia
    resource: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
    title: "Anaconda: Update on ToS for Academia and Research (2024-09-18)"
  - id: tos-plugin
    resource: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
    title: "Anaconda: conda-anaconda-tos plugin"
  - id: gh-runner-issue
    resource: https://github.com/actions/runner-images/issues/12641
    title: "actions/runner-images #12641: Miniconda fails due to new ToS (July 2025)"
  - id: law360-intel
    resource: https://www.law360.com/articles/1868455/intel-hit-with-copyright-suit-over-expired-anaconda-license
    title: "Law360: Intel hit with copyright suit over expired Anaconda license (2024)"
  - id: courtlistener-intel
    resource: https://www.courtlistener.com/docket/69029637/anaconda-inc-v-intel-corporation/
    title: "CourtListener: Anaconda, Inc. v. Intel Corporation, 1:24-cv-00925 (D. Del.)"
  - id: anaconda-outerbounds
    resource: https://www.anaconda.com/blog/anaconda-acquires-outerbounds
    title: "Anaconda: Anaconda Acquires Outerbounds (2026-04-29)"
  - id: tns-outerbounds
    resource: https://thenewstack.io/anaconda-ai-outerbounds-python-metaflow/
    title: "The New Stack: Anaconda acquires Outerbounds"
  - id: anaconda-kilo
    resource: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
    title: "Anaconda: AI on Your Own Terms — Anaconda Acquires Kilo Code (2026-07-15)"
  - id: abj-2b
    resource: https://x.com/MyABJ/status/2078778179175448633
    title: "Austin Business Journal (X post): Anaconda valuation surpassed $2 billion, CEO said"
  - id: anaconda-enkrypt
    resource: https://www.anaconda.com/press/anaconda-acquires-enkrypt-ai
    title: "Anaconda: Anaconda Acquires Enkrypt AI (2026-08-04)"
  - id: anaconda-inc5000
    resource: https://www.anaconda.com/newsroom/anaconda-named-2026-inc-5000
    title: "Anaconda: Named to 2026 Inc. 5000 (2026-09-24)"
  - id: revelio-anaconda
    resource: https://www.reveliolabs.com/companies/anaconda/employees
    title: "Revelio Labs: Anaconda employee counts (aggregator)"
  - id: conda-sep-2025
    resource: https://conda.org/blog/2025-10-01-september-releases/
    title: "conda.org: conda 25.9.0 removes hardcoded Anaconda channels"
---

# Summary
Anaconda, Inc. is the clearest case in scientific computing of monetizing a community ecosystem through distribution: the conda tool is BSD open source, but its curated "defaults" channel (repo.anaconda.com) is paid for organizations of 200+ employees. After tightening the terms in March 2024 and sending legal demands with back-billing threats to non-profit research institutions[^register-tos], it then forced ToS acceptance into conda in July 2025, breaking CI pipelines[^gh-runner-issue][^tos-plugin]. Financially this worked: a >$150M Series C at ~$1.5B led by Insight Partners (2025-07-31), with >$150M ARR and profitable operations[^yahoo-series-c]. Under new CEO David DeSanto (ex-GitLab CPO, appointed 2025-10-16)[^bw-desanto] it repositioned as an enterprise "AI-native development" platform and bought Outerbounds/Metaflow (2026-04-29), Kilo Code (2026-07-15) and Enkrypt AI (2026-08-04)[^anaconda-outerbounds][^anaconda-kilo][^anaconda-enkrypt][^anaconda-inc5000]. Verdict: business growing; community trust eroded, and academia shifted to conda-forge.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| pre-W24 | 2024-03 / 2024-08 | ToS tightened (non-profits, non-curriculum research no longer exempt above 200 staff); legal demands to research institutions such as Mass General Brigham[^register-tos] | − (trust) / + (revenue) |
| pre-W24 | 2024 | Sues Intel in Delaware for copyright infringement over expired license (1:24-cv-00925)[^law360-intel][^courtlistener-intel] | 0 |
| pre-W24 | 2024-09-18 | Clarifies free use for accredited universities' teaching and research; admits March changes poorly communicated[^anaconda-academia] | + |
| W24 | 2025-06/07 | Intel case: motion to stay denied (2025-06-26), motion to strike damages denied (2025-07-14); later stayed by stipulation[^courtlistener-intel] | 0 |
| W24 | 2025-07-15/17 | ToS-acceptance plugin breaks CI (Miniconda on GitHub runners, scikit-learn), patched in 0.2.1[^gh-runner-issue][^tos-plugin] | − |
| W24 | 2025-07-31 | Series C >$150M at ~$1.5B (Insight Partners, Mubadala Capital); >$150M ARR, profitable[^yahoo-series-c][^bw-series-c] | + |
| W12 | 2025-10-16 | David DeSanto (ex-GitLab CPO) named CEO[^bw-desanto] | + |
| W6 | 2026-04-29 | Acquires Outerbounds (Metaflow); pledges Metaflow stays open source[^anaconda-outerbounds][^tns-outerbounds] | + |
| W3 | 2026-07-15 | Acquires Kilo Code; CEO says valuation now >$2B[^anaconda-kilo][^abj-2b] | + |
| W3 | 2026-08-04 | Acquires Enkrypt AI (AI security/compliance)[^anaconda-enkrypt] | + |
| W3 | 2026-09-24 | Named to Inc. 5000; new CFO Stewart Grierson and Office of the CEO[^anaconda-inc5000] | + |

# Monetization model
- Commercial licenses for the Anaconda Repository/defaults channel and Distribution for organizations with 200+ employees; mirroring/redistribution always requires a license[^anaconda-academia].
- Enterprise platform (package security/governance, AI model catalog) now extended with orchestration (Metaflow/Outerbounds), coding agents (Kilo) and AI guardrails (Enkrypt)[^anaconda-inc5000].

# Successes
- Unicorn round with >$150M ARR and profitability[^yahoo-series-c].
- Fast transformation into an enterprise AI-platform consolidator via three acquisitions in ~4 months[^anaconda-inc5000].

# Failures / risks
- Reputational damage in academia and research; institutions block Anaconda and move to Miniforge/conda-forge (see [conda](/projects/scientific-computing/conda.md)).
- Litigation as a revenue tool (Intel) and enforcement letters to non-profits[^law360-intel][^register-tos].
- Community moved the conda tool away from Anaconda defaults (conda 25.9.0)[^conda-sep-2025]; competition from uv/pixi for Python environments.
- Layoffs: Glassdoor/aggregator data suggest earlier rounds (2023–24) but no verified 2024–2026 layoff announcement was found; headcount roughly flat at ~550 (aggregator estimate, unverified)[^revelio-anaconda].
- Kilo Code's licensing status post-acquisition (MIT vs "source-available" wording) to watch[^anaconda-kilo].

# Related
- [/projects/scientific-computing/conda.md](/projects/scientific-computing/conda.md), [/projects/scientific-computing/conda-forge.md](/projects/scientific-computing/conda-forge.md), [/projects/ai-agents/kilo-code.md](/projects/ai-agents/kilo-code.md)
- [/organizations/kilo-code.md](/organizations/kilo-code.md), [/organizations/prefix-dev.md](/organizations/prefix-dev.md)
- [/events/2025-07-anaconda-series-c.md](/events/2025-07-anaconda-series-c.md), [/events/2025-07-anaconda-tos-prompt-breaks-ci.md](/events/2025-07-anaconda-tos-prompt-breaks-ci.md), [/events/2026-04-anaconda-acquires-outerbounds.md](/events/2026-04-anaconda-acquires-outerbounds.md), [/events/2026-07-anaconda-acquires-kilo-code.md](/events/2026-07-anaconda-acquires-kilo-code.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^yahoo-series-c]: https://tech.yahoo.com/ai/articles/ai-startup-anaconda-raises-150-142155568.html
[^bw-series-c]: https://www.businesswire.com/news/home/20250730399625/en/Anaconda-Raises-Over-%24150M-in-Series-C-Funding-to-Power-AI-for-the-Enterprise
[^bw-desanto]: https://www.businesswire.com/news/home/20251016933385/en/Anaconda-Names-David-DeSanto-as-Chief-Executive-Officer
[^register-tos]: https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/
[^anaconda-academia]: https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research
[^tos-plugin]: https://www.anaconda.com/blog/conda-anaconda-tos-plugin
[^gh-runner-issue]: https://github.com/actions/runner-images/issues/12641
[^law360-intel]: https://www.law360.com/articles/1868455/intel-hit-with-copyright-suit-over-expired-anaconda-license
[^courtlistener-intel]: https://www.courtlistener.com/docket/69029637/anaconda-inc-v-intel-corporation/
[^anaconda-outerbounds]: https://www.anaconda.com/blog/anaconda-acquires-outerbounds
[^tns-outerbounds]: https://thenewstack.io/anaconda-ai-outerbounds-python-metaflow/
[^anaconda-kilo]: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
[^abj-2b]: https://x.com/MyABJ/status/2078778179175448633
[^anaconda-enkrypt]: https://www.anaconda.com/press/anaconda-acquires-enkrypt-ai
[^anaconda-inc5000]: https://www.anaconda.com/newsroom/anaconda-named-2026-inc-5000
[^revelio-anaconda]: https://www.reveliolabs.com/companies/anaconda/employees
[^conda-sep-2025]: https://conda.org/blog/2025-10-01-september-releases/
