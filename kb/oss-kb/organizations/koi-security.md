---
type: Organization
title: Koi Security
description: "Extension/marketplace security startup that disclosed GlassWorm on Open VSX; Palo Alto Networks agreed to buy it on 2026-02-16 (reported ~$400M) and closed on 2026-04-14 (koi.ai now redirects to Palo Alto Cortex)."
resource: https://www.paloaltonetworks.com/cortex/agentic-endpoint-security
tags: [extension-security, acquisition, supply-chain-security]
org_kind: coss-startup
hq: Israel
funding: { total_usd: "undisclosed", last_round: "Acquired by Palo Alto Networks (agreed 2026-02-16, closed 2026-04-14)", last_round_date: 2026-04-14, valuation_usd: "~400M reported (Globes/Calcalist); PANW filings cite ~$300M cash + replacement awards at signing" }
business_verdict: acquired
projects: [projects/security-sustainability/open-vsx]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-pan
    resource: https://en.wikipedia.org/wiki/Palo_Alto_Networks
    title: "Wikipedia: Palo Alto Networks (acquisitions)"
  - id: koi-redirect
    resource: https://www.koi.ai/blog/glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-marketplace
    title: "Koi: GlassWorm (now 301-redirects to Palo Alto Networks Cortex)"
  - id: sa-koi
    resource: https://siliconangle.com/2026/02/17/palo-alto-networks-acquires-file-security-startup-koi-reported-400m/
    title: "SiliconANGLE: Palo Alto Networks acquires security startup Koi for reported $400M (2026-02-17)"
    author: org:siliconangle
  - id: globes-koi
    resource: https://en.globes.co.il/en/article-palo-alto-networks-to-buy-israeli-co-koi-security-1001535257
    title: "Globes: Palo Alto Networks to buy Israeli co Koi Security for $400m (2026-02)"
    author: org:globes
  - id: panw-10q-apr
    resource: https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000015/panw-20260430.htm
    title: "Palo Alto Networks Form 10-Q (quarter ended 2026-04-30): Koi acquisition completed 2026-04-14"
    author: org:palo-alto-networks
  - id: sw-glassworm
    resource: https://www.securityweek.com/open-vsx-downplays-impact-from-glassworm-campaign/
    title: "SecurityWeek: Open VSX downplays impact from GlassWorm campaign (2025-10)"
    author: org:securityweek
---
# Summary
Koi Security focused on securing browser and IDE extensions and marketplaces. Its GlassWorm research post on Open VSX now redirects (301) to Palo Alto Networks' Cortex agentic-endpoint page.[^koi-redirect] Palo Alto Networks signed a definitive agreement to acquire Koi on **2026-02-16** (reported by Israeli press at ~$400M; PANW's filing cites ~$300M of cash and replacement awards, subject to adjustments) and **completed the deal on 2026-04-14**, folding it into "Agentic Endpoint Security" and Prisma AIRS[^sa-koi][^globes-koi][^panw-10q-apr]. Koi had been founded in 2024 by Unit 8200 alumni[^globes-koi]. That was one of a string of PANW AI/security buys: Protect AI ($500M, Jul 2025), CyberArk ($25B, closed Feb 2026), Chronosphere ($3.35B, closed Jan 2026), Portkey (Apr 2026) and Console (~$500M, Sep 2026).[^wiki-pan]

# Business timeline
| Date | Event |
|---|---|
| 2025-10-17/20 | GlassWorm disclosure (Open VSX, ~35.8k downloads)[^sw-glassworm] |
| 2026-02-16 | Palo Alto Networks agrees to acquire (reported ~$400M)[^sa-koi][^globes-koi] |
| 2026-04-14 | Acquisition completed[^panw-10q-apr] |

# Monetization model
Enterprise extension and marketplace governance, now part of Cortex.

# Successes
- A fast exit on the back of threat research.[^wiki-pan]

# Failures / risks
- n/a (acquired).

# Related
- [Open VSX](/projects/security-sustainability/open-vsx.md), [GlassWorm](/events/2025-10-glassworm-open-vsx-worm.md)

[^wiki-pan]: Wikipedia, Palo Alto Networks.
[^koi-redirect]: koi.ai redirect observed 2026-10-03.
[^sa-koi]: SiliconANGLE, 2026-02-17.
[^globes-koi]: Globes, Feb 2026.
[^panw-10q-apr]: PANW 10-Q, quarter ended 2026-04-30.
[^sw-glassworm]: SecurityWeek, Oct 2025.
