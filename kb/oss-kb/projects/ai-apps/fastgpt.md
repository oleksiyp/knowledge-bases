---
type: OSS Project
title: FastGPT
description: "Sealos/labring's Chinese knowledge-base and visual-workflow LLM platform (~30k stars) under 'Apache-2.0 with additional conditions' that bar multi-tenant SaaS and logo removal — growing, source-available."
resource: https://github.com/labring/FastGPT
tags: [ai-apps, rag, workflow, source-available, china]
domain: ai-apps
license: "FastGPT Open Source License (Apache-2.0 + conditions: no multi-tenant SaaS, keep logo/copyright; not OSI)"
license_history: ["Apache-2.0 with additional conditions (current)"]
governance: company-led-open-core
steward: Sealos (labring)
backing_orgs: []
metrics:
  github_stars: { value: 29775, as_of: 2026-10-03 }
  latest_release: { value: "v4.17.1 (2026-09-30)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fastgpt-gh
    resource: https://github.com/labring/FastGPT
    title: FastGPT GitHub repository (GitHub API, 2026-10-03)
  - id: fastgpt-license
    resource: https://github.com/labring/FastGPT/blob/main/LICENSE
    title: FastGPT LICENSE
  - id: fastgpt-license-doc
    resource: https://doc.fastgpt.io/en/introduction/opensource/license
    title: FastGPT open source license documentation
---

# Summary
FastGPT is a Chinese RAG + visual workflow platform (Dify-like) from the Sealos team (labring), ~30k stars with frequent releases (v4.17.1, 2026-09-30)[^fastgpt-gh]. Its licence is Apache-2.0 plus extra conditions: commercial use and BaaS are allowed, but running a multi-tenant SaaS like FastGPT needs written authorisation and the console logo/copyright must not be removed — so it is source-available, not OSI open source[^fastgpt-license][^fastgpt-license-doc]. Verdict: growing; monetised through Sealos cloud and commercial licences.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-09-11 | v4.17.0[^fastgpt-gh] | OSS | + |
| W3 | 2026-09-30 | v4.17.1[^fastgpt-gh] | OSS | + |

# OSS successes
- High release cadence; large Chinese user base[^fastgpt-gh].
# OSS failures / risks
- Non-OSI "Apache + conditions" licence[^fastgpt-license].
# Business successes
- Licence carve-out protects hosted SaaS revenue[^fastgpt-license-doc].
# Business failures / risks
- Competes head-on with Dify and MaxKB.

# By window
## W3
- v4.17.x[^fastgpt-gh].
## W6
- v4.16 line; no discrete events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- The "Apache + no competing SaaS + keep branding" pattern (also Dify, LobeHub, Open WebUI) is now the dominant licence model for AI app platforms.

# Related
- [Dify](/projects/ai-agents/dify.md), [MaxKB](/projects/ai-apps/maxkb.md), [RAGFlow](/projects/ai-apps/ragflow.md), [LobeHub](/projects/ai-apps/lobehub.md)

[^fastgpt-gh]: GitHub API, labring/FastGPT — https://github.com/labring/FastGPT
[^fastgpt-license]: LICENSE — https://github.com/labring/FastGPT/blob/main/LICENSE
[^fastgpt-license-doc]: FastGPT docs — https://doc.fastgpt.io/en/introduction/opensource/license
