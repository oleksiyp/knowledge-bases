---
type: OSS Project
title: BentoML
description: "Python model-serving framework and BentoCloud platform acquired by Modular in Feb 2026 (Modular itself bought by Qualcomm months later); OSS activity has since collapsed to a trickle — declining."
resource: https://github.com/bentoml/BentoML
tags: [ai-inference, model-serving, apache-2.0, acquired]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: single-vendor
steward: Modular (Qualcomm)
backing_orgs: [organizations/modular]
metrics:
  github_stars: { value: 8872, as_of: 2026-10-03 }
  commits_last_3_months: { value: 6, as_of: 2026-10-03 }
  last_release: { value: v1.4.39, as_of: 2026-05-07 }
oss_verdict: declining
business_verdict: acquired
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bento-gh
    resource: https://github.com/bentoml/BentoML
    title: BentoML GitHub repository (stars, releases, commits via GitHub API)
  - id: modular-bento
    resource: https://www.modular.com/blog/bentoml-joins-modular
    title: "Modular: BentoML Joins Modular (2026-02-10)"
    author: org:modular
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: Qualcomm 10-Q (Modular acquisition)
---

# Summary
BentoML (used by 10,000+ organisations and 50+ Fortune 500 companies per the acquirer) was acquired by Modular on 2026-02-10 with a promise that "nothing breaks" and the project continues under Apache-2.0[^modular-bento]. Modular was itself acquired by Qualcomm (closed 2026-07-28)[^qcom-10q]. Since then the repo has slowed sharply: last release v1.4.39 on 2026-05-07 and only 6 commits in the last three months[^bento-gh]. Verdict: OSS declining; business outcome acquired (terms undisclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-02-10 | Acquired by Modular; Apache-2.0 continuity pledge[^modular-bento] | Business | mixed |
| W6 | 2026-05-07 | Last release v1.4.39[^bento-gh] | OSS | − |
| W3 | 2026-07-28 | Parent Modular acquired by Qualcomm[^qcom-10q] | Business | mixed |
| W3 | 2026-07 → 10 | Only 6 commits in the quarter[^bento-gh] | OSS | − |

# OSS successes
- License unchanged (Apache-2.0)[^modular-bento].
# OSS failures / risks
- Post-acquisition activity collapse — classic "acqui-hire freeze"[^bento-gh].
# Business successes
- Exit for investors (terms undisclosed)[^modular-bento].
# Business failures / risks
- Independent BentoCloud strategy ended; generic Python serving squeezed by vLLM/SGLang and inference clouds.

# By window
## W3
- 6 commits; parent sold to Qualcomm[^bento-gh][^qcom-10q].
## W6
- Last release (2026-05-07)[^bento-gh].
## W9
- Acquisition (2026-02-10)[^modular-bento].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- "The project continues under Apache-2.0" is a licence promise, not a staffing promise; watch commit graphs after acquisitions.

# Related
- [Modular](/organizations/modular.md), [Mojo & MAX](/projects/ai-inference/mojo-max.md)
- [Event: Modular acquires BentoML](/events/2026-02-modular-acquires-bentoml.md)

[^bento-gh]: BentoML GitHub — https://github.com/bentoml/BentoML
[^modular-bento]: Modular blog — https://www.modular.com/blog/bentoml-joins-modular
[^qcom-10q]: Qualcomm 10-Q — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
