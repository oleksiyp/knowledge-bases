---
type: Organization
title: Snyk
description: "Pioneer of developer-first open source dependency scanning; hit $300M ARR (Dec 2024) but stayed private far below its 2021 $8.5B peak valuation while AI-native and supply-chain-native rivals captured momentum."
resource: https://snyk.io
tags: [appsec, sca, coss-adjacent]
org_kind: coss-startup
hq: Boston, MA, USA
funding: { total_usd: "aggregate not company-confirmed (>$1B per press)", last_round: "$196M (2022-12) at $7.4B", last_round_date: 2022-12-12, valuation_usd: "7.4B (2022); current unverified" }
business_verdict: struggling
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-snyk-300
    resource: https://techcrunch.com/2024/12/06/snyk-hits-300m-arr-but-isnt-rushing-to-go-public/
    title: "TechCrunch: Snyk hits $300M ARR but isn't rushing to go public"
  - id: tc-snyk-2022
    resource: https://techcrunch.com/2022/12/12/snyk-scores-another-196m-as-valuation-drops-12-to-7-4b-valuation/
    title: "TechCrunch: Snyk valuation drops 12% to $7.4B"
  - id: wiki-snyk
    resource: https://en.wikipedia.org/wiki/Snyk
    title: "Wikipedia: Snyk"
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: poisoned security scanner backdooring LiteLLM"
  - id: stack-snyk-ceo
    resource: https://www.thestack.technology/snyk-ceo-steps-down-better-ai-knowledge/
    title: "The Stack: Snyk CEO steps down, says needs exec with more AI knowledge (2026-02-20)"
  - id: techeu-snyk
    resource: https://tech.eu/2026/10/01/snyk-laid-off-over-200-employees-revenues-top-300m/
    title: "Tech.eu: Snyk laid off over 200 employees, revenues top $300M (2026-10-01; Companies House filing)"
    author: org:tech-eu
---
# Summary
Snyk reached **$300M ARR in Dec 2024** but said it was in no hurry to IPO.[^tc-snyk-300] It is still private as of mid-2026.[^wiki-snyk] Its last priced round was a down round in Dec 2022 ($7.4B, down from $8.5B in 2021).[^tc-snyk-2022] It has been buying AI-security capabilities: Probely (Nov 2024, DAST) and Invariant Labs (Jun 2025, AI agent security).[^wiki-snyk] Verdict: **struggling** (Corrected in pass 2: stable → struggling, after a CEO exit, ~20% layoffs and widening losses in 2026). It remains a large revenue business, but it now looks like the incumbent being disrupted by Aikido, Socket, Endor and Chainguard, and by platform bundling (Wiz/Google, GitHub Advanced Security). 2026 was turbulent: CEO Peter McKay said on 2026-02-20 that he would step down so that a more "AI-immersed" leader could take over, with CFO Kenneth MacAskill as interim CEO[^stack-snyk-ceo]. In June 2026 Snyk cut ~203 jobs (~20% of staff; first reported as ~90). UK Companies House filings show 2025 revenue of $309M (+11%) and a loss that widened to $189M[^techeu-snyk]. No new priced round or valuation reset has been disclosed.

# Business timeline
| Date | Event |
|---|---|
| 2022-12-12 | $196M at $7.4B (down 12%)[^tc-snyk-2022] |
| 2024-11 | Acquires Probely[^wiki-snyk] |
| 2024-12-06 | $300M ARR; no IPO rush[^tc-snyk-300] |
| 2025-06 | Acquires Invariant Labs[^wiki-snyk] |
| 2026-02-20 | CEO Peter McKay to step down; CFO interim CEO[^stack-snyk-ceo] |
| 2026-06 | ~203 layoffs (~20%); 2025 revenue $309M, loss $189M (filings)[^techeu-snyk] |
| 2026-07 | Still private[^wiki-snyk] |

# Monetization model
Enterprise SaaS for SCA, SAST, containers and IaC, with a large free tier and a vulnerability database.

# Successes
- Scale ($300M ARR) and active threat research.[^tc-snyk-300][^snyk-litellm]

# Failures / risks
- The IPO window was missed and the 2021 valuation looks stretched. AI-native competitors are growing faster.

# Related
- [Aikido Security](/organizations/aikido-security.md), [Endor Labs](/organizations/endor-labs.md), [Wiz](/organizations/wiz.md)

[^tc-snyk-300]: TechCrunch 2024-12-06.
[^tc-snyk-2022]: TechCrunch 2022-12-12.
[^wiki-snyk]: Wikipedia.
[^snyk-litellm]: Snyk blog.
[^stack-snyk-ceo]: The Stack, 2026-02-20.
[^techeu-snyk]: Tech.eu, 2026-10-01.
