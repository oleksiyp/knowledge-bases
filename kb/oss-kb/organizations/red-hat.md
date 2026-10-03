---
type: Organization
title: Red Hat
description: "IBM's open source subsidiary (RHEL, OpenShift, Ansible); still growing ~11% (Q2 2026) and anchoring IBM's 'High-Growth Portfolio' with HashiCorp and Confluent, while IBM cut jobs (Nov 2025) and Red Hat moved China engineering to India (Apr 2026)."
resource: https://www.redhat.com
tags: [commercial-open-source, linux, kubernetes, ibm-subsidiary]
org_kind: big-tech
hq: Raleigh, USA
funding: { total_usd: "n/a (IBM subsidiary since 2019, $34B)", last_round: "n/a", last_round_date: 2019-07, valuation_usd: "n/a" }
business_verdict: stable
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-q2-2026
    resource: https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS
    title: "IBM Releases Second-Quarter 2026 Results (Red Hat +11%)"
  - id: gn-ibmcuts
    resource: https://www.techrepublic.com/article/news-ibm-layoffs-november-2025/
    title: "TechRepublic: IBM's big AI bet comes with layoffs (2025-11; IBM cuts 'thousands', Red Hat growth slowing)"
  - id: gn-redhat
    resource: https://www.theregister.com/2026/04/10/red_hat_ends_china_engineering/
    title: "The Register: Red Hat RHELocates its Chinese engineering team to India (2026-04-10)"
    author: org:the-register
  - id: gn-vmware
    resource: https://www.techtarget.com/it-infrastructure/news/366645215/More-VMware-customers-jumping-ship-as-contracts-wind-down
    title: "TechTarget: More VMware customers jumping ship as contracts wind down (2026-06-26)"
    author: org:techtarget
---

# Summary
Red Hat remains the largest open source software business by revenue, operating inside IBM. In IBM's Q2 2026 results Red Hat grew **11%**, versus IBM's total +1% and software +5%[^ibm-q2-2026]. Pressure points: IBM announced cuts of "thousands" of roles in Q4 2025 amid reporting that Red Hat growth was slowing[^gn-ibmcuts], and in April 2026 Red Hat relocated its China engineering (reported 400+ roles) to India[^gn-redhat]. Broadcom's VMware licensing changes continued to send virtualization customers to alternatives, including OpenShift Virtualization[^gn-vmware].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W12 | 2025-11-04 | IBM job cuts; Red Hat growth slowing[^gn-ibmcuts] | − |
| W6 | 2026-04-10 | China engineering moved to India[^gn-redhat] | − |
| W3 | 2026-07-22 | Red Hat +11% in Q2 2026[^ibm-q2-2026] | + |

# Monetization model
Subscriptions for supported enterprise distributions of upstream OSS (RHEL, OpenShift, Ansible, RHEL AI).

# Successes
- Double-digit growth at multi-billion scale; beneficiary of VMware exodus[^gn-vmware].

# Failures / risks
- Deceleration and cost-cutting under IBM; RHEL source-access restrictions (2023) still erode community goodwill.

# Related
- [IBM open source portfolio](/projects/coss-market/ibm-open-source-portfolio.md)

[^ibm-q2-2026]: IBM Newsroom, 2026-07-22.
[^gn-ibmcuts]: TechRepublic, Nov 2025.
[^gn-redhat]: The Register, 2026-04-10.
[^gn-vmware]: TechTarget, 2026-06-26.
