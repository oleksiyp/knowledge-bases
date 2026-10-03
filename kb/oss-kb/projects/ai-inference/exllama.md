---
type: OSS Project
title: ExLlama (v2 / v3)
description: "turboderp's single-maintainer quantized-inference engine for consumer GPUs; ExLlamaV2 went dormant while ExLlamaV3 is very active but small (1.6k stars) — stable niche with bus-factor risk."
resource: https://github.com/turboderp-org/exllamav3
tags: [ai-inference, local-ai, quantization, mit, single-maintainer]
domain: ai-inference
license: MIT
license_history: ["MIT"]
governance: community
steward: turboderp (individual maintainer)
backing_orgs: []
metrics:
  github_stars_v3: { value: 1574, as_of: 2026-10-03 }
  commits_last_3_months_v3: { value: 751, as_of: 2026-10-03 }
  commits_last_3_months_v2: { value: 0, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: exl3-gh
    resource: https://github.com/turboderp-org/exllamav3
    title: ExLlamaV3 GitHub repository (stars, commits via GitHub API)
  - id: exl2-gh
    resource: https://github.com/turboderp-org/exllamav2
    title: ExLlamaV2 GitHub repository (commit activity via GitHub API)
---

# Summary
ExLlama is the enthusiast's high-speed quantized engine (EXL2/EXL3 formats). The V2 repo had zero commits in the last three months[^exl2-gh], while V3 logged 751 commits but has only ~1.6k stars[^exl3-gh]. It remains one person's project with no company or funding. Verdict: stable niche; high bus factor risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-07 → 2026-10 | V3: 751 commits; V2: 0 commits[^exl3-gh][^exl2-gh] | OSS | mixed |

# OSS successes
- Continued innovation in quantization formats by a single expert[^exl3-gh].
# OSS failures / risks
- Format fragmentation (EXL2 → EXL3) and V2 dormancy; GGUF dominance limits reach[^exl2-gh].
# Business successes
- n/a
# Business failures / risks
- No sustainability vehicle.

# By window
## W3
- V3 active, V2 dormant[^exl3-gh][^exl2-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Technically superior formats lose to the format with ecosystem distribution (GGUF).

# Related
- [llama.cpp](/projects/ai-inference/llama-cpp.md)

[^exl3-gh]: ExLlamaV3 GitHub — https://github.com/turboderp-org/exllamav3
[^exl2-gh]: ExLlamaV2 GitHub — https://github.com/turboderp-org/exllamav2
