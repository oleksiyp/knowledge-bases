---
type: Organization
title: Semgrep
description: "Maker of the LGPL Semgrep static analysis engine (formerly r2c); restricting Community Edition features triggered the vendor-backed Opengrep fork in early 2025."
resource: https://semgrep.dev
tags: [sast, open-core, license-change]
org_kind: coss-startup
hq: San Francisco, CA, USA
funding: { total_usd: "$204M (company, after Series D)", last_round: "Series D $100M (Menlo Ventures lead)", last_round_date: 2025-02-05, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/security-sustainability/opengrep]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-semgrep
    resource: https://en.wikipedia.org/wiki/Semgrep
    title: "Wikipedia: Semgrep"
  - id: tc-semgrep
    resource: https://techcrunch.com/2023/04/18/semgrep-formerly-r2c-lands-53m-investment-to-grow-code-security-platform/
    title: "TechCrunch: Semgrep lands $53M"
  - id: opengrep
    resource: https://www.opengrep.dev/
    title: Opengrep
  - id: sa-semgrep-d
    resource: https://siliconangle.com/2025/02/05/code-security-startup-semgrep-reels-100m-investors/
    title: "SiliconANGLE: Code security startup Semgrep reels in $100M from investors (2025-02-05)"
    author: org:siliconangle
---
# Summary
Semgrep's open source engine (OCaml/Python, LGPL-2.1, 30+ languages) is widely used. The company had raised $93M through its April 2023 $53M Series C.[^wiki-semgrep][^tc-semgrep] When it moved engine features (some language support, meta-variables, fingerprinting) behind commercial terms, competitors forked the engine as **Opengrep**.[^opengrep] In February 2025 it raised a $100M Series D led by Menlo Ventures (with Felicis, Harpoon, Lightspeed, Redpoint and Sequoia), bringing total funding to $204M[^sa-semgrep-d]. (Corrected in pass 2: funding "$93M; later rounds unverified" → $204M after the 2025 Series D.) Verdict: **stable**. The commercial product continues, but control over its open source engine is now split with the fork.

# Business timeline
| Date | Event |
|---|---|
| 2023-04-18 | $53M Series C[^tc-semgrep] |
| 2024-12/2025-01 | CE feature restrictions → Opengrep fork[^opengrep] |
| 2025-02-05 | $100M Series D (Menlo); $204M total[^sa-semgrep-d] |

# Monetization model
Open-core: free CE engine plus a paid AppSec platform (Pro engine, supply chain, secrets, AI triage).

# Successes
- Strong developer adoption of its rule syntax.[^wiki-semgrep]

# Failures / risks
- The fork is backed by direct competitors (Aikido, Endor, Orca).[^opengrep]

# Related
- [Opengrep](/projects/security-sustainability/opengrep.md), [Opengrep fork event](/events/2025-01-opengrep-forks-semgrep.md)

[^wiki-semgrep]: Wikipedia.
[^tc-semgrep]: TechCrunch.
[^opengrep]: opengrep.dev.
[^sa-semgrep-d]: SiliconANGLE, 2025-02-05.
