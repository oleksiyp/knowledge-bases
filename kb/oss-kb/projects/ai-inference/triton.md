---
type: OSS Project
title: Triton (language and compiler)
description: "OpenAI-originated Python DSL/compiler for GPU kernels, the de facto kernel layer under PyTorch's torch.compile and many inference engines — stable, widely embedded."
resource: https://github.com/triton-lang/triton
tags: [ai-inference, compiler, kernels, mit]
domain: ai-inference
license: MIT
license_history: ["MIT"]
governance: company-led-open-core
steward: OpenAI-led community (triton-lang org)
backing_orgs: []
metrics:
  github_stars: { value: 20289, as_of: 2026-10-03 }
  latest_release: { value: v3.8.0, as_of: 2026-08-28 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: triton-gh
    resource: https://github.com/triton-lang/triton
    title: Triton GitHub repository (stars, releases via GitHub API)
---

# Summary
Triton is infrastructure most users never see: it generates GPU kernels for PyTorch Inductor and many inference engines. It shipped v3.7.0 (2026-05-07), v3.7.1 (2026-06-18) and v3.8.0 (2026-08-28)[^triton-gh]. No major governance or licensing events were found in the window. Verdict: stable. Competitive pressure comes from Mojo (open-sourced Aug 2026) and vendor DSLs.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-05-07 | v3.7.0[^triton-gh] | OSS | + |
| W3 | 2026-08-28 | v3.8.0[^triton-gh] | OSS | + |

# OSS successes
- Ubiquitous embedding in PyTorch stack[^triton-gh].
# OSS failures / risks
- Governance is informal relative to its criticality.
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- v3.8.0[^triton-gh].
## W6
- v3.7.0/3.7.1[^triton-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Critical-path infrastructure without foundation governance is a latent risk worth watching.

# Related
- [PyTorch](/projects/ai-inference/pytorch.md), [Mojo & MAX](/projects/ai-inference/mojo-max.md)

[^triton-gh]: Triton GitHub — https://github.com/triton-lang/triton
