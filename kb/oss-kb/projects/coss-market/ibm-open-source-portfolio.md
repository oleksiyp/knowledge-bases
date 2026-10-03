---
type: Market Study
title: "IBM's open source portfolio: Red Hat, HashiCorp, Confluent"
description: "IBM became the largest owner of commercial open source franchises — Red Hat ($34B, 2019), HashiCorp ($6.4B EV, closed Feb 2025) and Confluent (~$11B, closed Mar 2026) — with Red Hat still growing ~11% in Q2 2026 even as IBM cut jobs and Red Hat exited China R&D."
resource: https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS
tags: [ibm, red-hat, hashicorp, confluent, consolidation, market-study]
domain: coss-market
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-q2-2026
    resource: https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS
    title: "IBM Releases Second-Quarter 2026 Results (2026-07-22)"
  - id: tr-ibm-cuts
    resource: "https://www.techrepublic.com/article/news-ibm-layoffs-november-2025/"
    title: "TechRepublic: IBM's big AI bet comes with layoffs (Nov 2025; Red Hat Q3 growth 14% vs 16% prior)"
  - id: reg-redhat-china
    resource: "https://www.theregister.com/2026/04/10/red_hat_ends_china_engineering/"
    title: "The Register: Red Hat RHELocates its Chinese engineering team to India (2026-04-10)"
  - id: tc-ibm-hashicorp
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition"
  - id: ibm-confluent-close
    resource: https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents
    title: "IBM completes acquisition of Confluent (2026-03-17)"
  - id: ibm-confluent-announce
    resource: "https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai"
    title: "IBM Newsroom: IBM to acquire Confluent ($31/share, $11B enterprise value, 2025-12-08)"
  - id: tt-openshift
    resource: "https://www.techtarget.com/searchitoperations/news/366643085/Enterprises-fleeing-Broadcom-move-to-OpenShift-Virtualization"
    title: "TechTarget: Enterprises fleeing Broadcom move to OpenShift Virtualization"
---

# Summary

IBM is now the single largest owner of commercial open source franchises: **Red Hat** (acquired 2019), **HashiCorp** ($35/share, ~$7.2B equity / $6.4B EV, closed 2025-02-27)[^tc-ibm-hashicorp], and **Confluent** ($31/share cash, ~$11B, announced 2025-12-08, closed 2026-03-17)[^ibm-confluent-announce][^ibm-confluent-close]. IBM reports all three in a "High-Growth Portfolio"; in Q2 2026 Red Hat grew **11%** while IBM total revenue grew 1% to $17.2B, software 5% to $7.8B, and IBM trimmed full-year guidance to 4–5% constant-currency growth[^ibm-q2-2026]. The other side of the ledger: on 2025-11-04 IBM announced cuts of a "low single-digit percentage" of its workforce (thousands of jobs) weeks after Red Hat's Q3 2025 growth slowed to 14% from 16%[^tr-ibm-cuts], and in April 2026 Red Hat ended engineering in China and moved most roles to India (Chinese media reported 300–500 layoffs; Red Hat did not comment publicly)[^reg-redhat-china]. Broadcom's VMware repricing kept pushing customers toward open virtualization alternatives such as OpenShift Virtualization[^tt-openshift]. Corrected in pass 2: China R&D "~400+ roles" → 300–500 reported.

# Timeline

| Window | Date | Event | Signal | Source |
|---|---|---|---|---|
| W24 | 2025-02-27 | IBM closes HashiCorp ($6.4B EV) | + | [^tc-ibm-hashicorp] |
| W12 | 2025-11-04 | IBM to cut thousands of jobs (low single-digit %); Red Hat Q3 growth slowed to 14% | − | [^tr-ibm-cuts] |
| W12 | 2025-12-08 | IBM agrees to buy Confluent for ~$11B | + | [^ibm-confluent-announce] |
| W9 | 2026-03-17 | Confluent deal closes; CFLT delisted | + | [^ibm-confluent-close] |
| W6 | 2026-04-10 | Red Hat relocates China engineering to India | − | [^reg-redhat-china] |
| W3 | 2026-07-22 | IBM Q2: Red Hat +11%, guidance trimmed, mainframe weakness | ± | [^ibm-q2-2026] |

# By window
## W3
- Red Hat +11.2% (10.9% cc) in Q2 2026 with OpenShift ARR above $2B; IBM total revenue $17.2B (+1%) missed expectations and full-year guidance was trimmed to 4–5%[^ibm-q2-2026].
## W6
- Red Hat China R&D exit[^reg-redhat-china].
## W9
- Confluent closes[^ibm-confluent-close].
## W12
- IBM job cuts; Confluent deal announced[^tr-ibm-cuts][^ibm-confluent-announce].
## W24
- HashiCorp closes[^tc-ibm-hashicorp].

# Lessons
- IBM pays 10x+ revenue for open source franchises with enterprise distribution and keeps them as semi-autonomous units — a reliable exit path for mid-cap COSS.
- Ownership by IBM changes community dynamics (HashiCorp's BSL remained; OpenTofu continued independently).

# Related
- [Red Hat](/organizations/red-hat.md), [HashiCorp](/organizations/hashicorp.md), [Confluent](/organizations/confluent.md), [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md)

[^ibm-q2-2026]: IBM Newsroom, 2026-07-22.
: Reuters/CNBC/IBD via Google News.
[^tr-ibm-cuts]: TechRepublic: IBM's big AI bet comes with layoffs (Nov 2025; Red Hat Q3 growth 14% vs 16% prior).
[^reg-redhat-china]: The Register: Red Hat RHELocates its Chinese engineering team to India (2026-04-10).
[^tc-ibm-hashicorp]: TechCrunch, 2025-02-27.
[^ibm-confluent-close]: IBM Newsroom, 2026-03-17.
[^ibm-confluent-announce]: IBM Newsroom: IBM to acquire Confluent ($31/share, $11B enterprise value, 2025-12-08).
[^tt-openshift]: TechTarget: Enterprises fleeing Broadcom move to OpenShift Virtualization.
