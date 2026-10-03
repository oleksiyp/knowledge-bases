---
type: OSS Project
title: tinygrad (tiny corp)
description: "George Hotz's minimalist MIT-licensed deep-learning framework, funded by selling tinybox AI computers; steady releases and ~34k stars, small but sustainable — stable."
resource: https://github.com/tinygrad/tinygrad
tags: [ai-inference, training, mit, hardware-funded]
domain: ai-inference
license: MIT
license_history: ["MIT (2020-)"]
governance: company-led-open-core
steward: tiny corp
backing_orgs: []
metrics:
  github_stars: { value: 33693, as_of: 2026-10-03 }
  commits_last_3_months: { value: 1360, as_of: 2026-10-03 }
  latest_release: { value: v0.14.0, as_of: 2026-08-24 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tg-gh
    resource: https://github.com/tinygrad/tinygrad
    title: tinygrad GitHub repository (stars, releases, commits via GitHub API)
  - id: tg-site
    resource: https://tinygrad.org/
    title: tinygrad.org / tiny corp (tinybox products, funding note)
---

# Summary
tinygrad is a hardware-funded OSS model: tiny corp (which states it raised $5M) sells tinybox machines — currently Red v2 (4x AMD 9070XT) and Green v2 Blackwell (4x RTX PRO 6000) — and takes preorders for a 720-GPU "exabox" targeted at 2027[^tg-site]. The framework shipped v0.12 (2026-01-12), v0.13 (2026-05-22) and v0.14 (2026-08-24), with 1,360 commits in W3[^tg-gh]. Verdict: stable niche; business stable but small.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-12 | v0.12.0[^tg-gh] | OSS | + |
| W6 | 2026-05-22 | v0.13.0[^tg-gh] | OSS | + |
| W3 | 2026-08-24 | v0.14.0; exabox preorders for 2027[^tg-gh][^tg-site] | OSS/Business | + |

# OSS successes
- Bounty-driven contributor pipeline doubles as hiring[^tg-site]; AMD consumer-GPU support is a differentiator[^tg-site].
# OSS failures / risks
- Adoption far below PyTorch/JAX; still pre-1.0[^tg-gh].
# Business successes
- Self-funding via hardware sales; small raise ($5M)[^tg-site].
# Business failures / risks
- Hardware margins and supply risk; revenue undisclosed.

# By window
## W3
- v0.14.0; exabox preorder[^tg-gh][^tg-site].
## W6
- v0.13.0[^tg-gh].
## W9
- v0.12.0[^tg-gh].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Selling hardware is a viable, non-VC-scale way to fund an OSS framework.

# Related
- [PyTorch](/projects/ai-inference/pytorch.md), [Mojo & MAX](/projects/ai-inference/mojo-max.md)

[^tg-gh]: tinygrad GitHub — https://github.com/tinygrad/tinygrad
[^tg-site]: tinygrad.org — https://tinygrad.org/
