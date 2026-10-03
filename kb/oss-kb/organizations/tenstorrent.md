---
type: Organization
title: Tenstorrent
description: "Jim Keller-led AI-accelerator and RISC-V CPU company whose software stack (TT-Metalium, TT-Forge) is open source. Raised $693M Series D (Dec 2024); denied reported $8–10B Qualcomm takeover talks (Jun 2026); data aggregators report a ~$1.29B Series E in Aug 2026 (not press-confirmed)."
resource: https://tenstorrent.com
tags: [risc-v, ai-hardware, open-source-software-stack, coss-adjacent]
org_kind: coss-startup
hq: Toronto, Canada
funding: { total_usd: "unverified (aggregators: ~$2.3–2.5B)", last_round: "Series E (reported ~$1.29B; aggregator data only)", last_round_date: 2026-08-26, valuation_usd: "unverified" }
business_verdict: growing
projects: [projects/hardware-embedded/risc-v]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-seriesd
    resource: https://techcrunch.com/2024/12/02/jeff-bezos-backs-ai-chipmaker-tenstorrent
    title: "TechCrunch: Jeff Bezos backs AI chipmaker Tenstorrent (2024-12-02)"
  - id: ew-seriesd
    resource: https://www.electronicsweekly.com/uncategorised/852697-2024-12/
    title: "Electronics Weekly: Tenstorrent raises $693M Series D (2024-12)"
  - id: reuters-qcom-tt
    resource: https://www.tradingview.com/news/reuters.com,2026:newsml_L4N42N1X5:0-qualcomm-in-talks-to-buy-tenstorrent-the-information-reports/
    title: "Reuters (via TradingView): Qualcomm in talks to buy Tenstorrent (2026-06)"
  - id: guru-denial
    resource: https://www.gurufocus.com/news/8938157/tenstorrent-ceo-denies-qualcomm-acquisition-talks-amid-focus-on-ai-development
    title: "GuruFocus: Tenstorrent CEO denies Qualcomm acquisition talks (2026-06-30)"
  - id: setter-tt
    resource: https://settervc.com/company/tenstorrent
    title: "Setter VC company profile (Series E $1.29B, 2026-08-26; aggregator)"
  - id: tt-open
    resource: https://tenstorrent.com/newsroom/the-open-hardware-revolution
    title: "Tenstorrent: The Open Hardware Revolution"
  - id: ttmetal-gh
    resource: https://github.com/tenstorrent/tt-metal
    title: "tt-metal GitHub (Apache-2.0)"
---

# Summary
Tenstorrent's strategy is **open software plus RISC-V** as an alternative to CUDA. Its TT-Metalium stack is Apache-2.0 on GitHub,[^ttmetal-gh][^tt-open] and it licenses its Ascalon RISC-V CPU IP. It raised **$693M Series D** at a ~$2B pre-money valuation in Dec 2024 (Samsung Securities and AFW led; Bezos Expeditions, Fidelity and LG participated).[^tc-seriesd][^ew-seriesd] In June 2026 Reuters, citing The Information, reported Qualcomm in talks to buy it for $8–10B.[^reuters-qcom-tt] On June 30 Keller denied any talks and said the company would focus on its own business.[^guru-denial] Aggregators list a **~$1.29B Series E on 2026-08-26**. Not confirmed by press or company release as of 2026-10-03.[^setter-tt]

# Business timeline
| Date | Event |
|---|---|
| 2024-12-02 | $693M Series D[^tc-seriesd] |
| 2026-06 | Qualcomm takeover talks reported ($8–10B)[^reuters-qcom-tt] |
| 2026-06-30 | Keller denies talks[^guru-denial] |
| 2026-08-26 | Series E ~$1.29B (aggregator-reported; unverified)[^setter-tt] |

# Monetization model
AI accelerator cards and systems (Blackhole/Galaxy), RISC-V CPU and chiplet IP licensing. Software is open source to drive adoption.

# Successes
- Capital access; credible "open alternative to CUDA" positioning.[^tt-open]

# Failures / risks
- Small developer community (tt-metal ~1.7k stars) relative to CUDA,[^ttmetal-gh] and acquisition gravity from big chipmakers.

# Related
- [RISC-V](/projects/hardware-embedded/risc-v.md), [Qualcomm](/organizations/qualcomm.md), [tinygrad](/projects/ai-inference/tinygrad.md)

[^tc-seriesd]: TechCrunch, 2024-12-02.
[^ew-seriesd]: Electronics Weekly.
[^reuters-qcom-tt]: Reuters via TradingView.
[^guru-denial]: GuruFocus, 2026-06-30.
[^setter-tt]: Setter VC (aggregator).
[^tt-open]: Tenstorrent newsroom.
[^ttmetal-gh]: GitHub.
