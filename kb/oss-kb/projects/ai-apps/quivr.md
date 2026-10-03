---
type: OSS Project
title: Quivr
description: "Once-viral open-source 'second brain' RAG app (~40k stars) whose YC company pivoted on 2025-02-14 to closed customer-support automation; the repo (now under The-Vibe-Company) has had no commits since June 2025 — dead OSS, business pivoted."
resource: https://github.com/QuivrHQ/quivr
tags: [ai-apps, rag, pivot, abandoned, yc]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: single-vendor
steward: Quivr (YC W24)
backing_orgs: []
metrics:
  github_stars: { value: 39579, as_of: 2026-10-03 }
  last_commit: { value: "2025-06-19", as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: struggling
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: quivr-gh
    resource: https://github.com/QuivrHQ/quivr
    title: Quivr GitHub repository (GitHub API, now The-Vibe-Company/quivr, 2026-10-03)
  - id: quivr-pivot
    resource: https://www.quivr.com/blog/how-we-pivoted-using-the-yc-playbook
    title: "Quivr blog: How we pivoted using the YC playbook"
  - id: quivr-yc
    resource: https://ycombinator.com/companies/quivr
    title: "Y Combinator: Quivr (W24)"
---

# Summary
Quivr was one of 2023's breakout "chat with your second brain" repos (~40k stars)[^quivr-gh]. On 2025-02-14 the YC W24 company "fired all of their previous customers" to focus solely on customer-support automation inside Zendesk-style helpdesks, reaching ~$10k MRR three months later; it also stopped maintaining its MegaParse parser[^quivr-pivot][^quivr-yc]. The OSS repo (now transferred to The-Vibe-Company org) has no commits since 2025-06-19 and no release since Feb 2025[^quivr-gh]. Verdict: OSS dead; business pivoted (small).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-14 | Pivot to customer-support automation[^quivr-pivot] | Business | ± |
| W24 | 2025-06-19 | Last commit[^quivr-gh] | OSS | − |
| W6–W3 | 2026 | Repo appears under The-Vibe-Company org (redirect)[^quivr-gh] | OSS | − |

# OSS successes
- Early RAG reference app; library quivr-core.
# OSS failures / risks
- Abandoned after pivot; ownership transfer adds confusion[^quivr-gh].
# Business successes
- Found a narrower paying niche quickly[^quivr-pivot].
# Business failures / risks
- Small revenue; crowded AI support market.

# By window
## W3
- No commits[^quivr-gh].
## W6
- No commits[^quivr-gh].
## W9
- No commits[^quivr-gh].
## W12
- No commits[^quivr-gh].
## W24
- Pivot (Feb 2025); last commit (Jun 2025)[^quivr-pivot][^quivr-gh].

# Lessons
- GitHub stars from a horizontal "second brain" demo didn't translate into a business; YC-style focus meant abandoning the OSS.

# Related
- [Khoj](/projects/ai-apps/khoj.md), [PrivateGPT](/projects/ai-apps/privategpt.md), [Quivr pivot event](/events/2025-02-quivr-pivots-away-from-oss.md)

[^quivr-gh]: GitHub API, QuivrHQ/quivr → The-Vibe-Company/quivr — https://github.com/QuivrHQ/quivr
[^quivr-pivot]: Quivr blog — https://www.quivr.com/blog/how-we-pivoted-using-the-yc-playbook
[^quivr-yc]: Y Combinator — https://ycombinator.com/companies/quivr
