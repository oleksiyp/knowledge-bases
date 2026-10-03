---
type: Event
title: "Qualcomm acquires Modular (~$3.1B)"
description: "Modular signed a definitive agreement to be acquired by Qualcomm on 2026-06-25 (reported at ~$3.9B); completion was announced 2026-07-29 (10-Q: completed 2026-07-28) at ~$3.1B in Qualcomm stock, and Chris Lattner became a Qualcomm EVP."
event_kind: acquisition
date: 2026-06-25
window: W6
impact: positive
projects: [projects/ai-inference/mojo-max, projects/ai-inference/bentoml]
organizations: [organizations/modular]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gv-qcom
    resource: https://www.gv.com/news/modular-qualcomm-inference
    title: "GV: Modular and Qualcomm — The Next Chapter (2026-06-25)"
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: "Qualcomm Form 10-Q (Modular acquisition note)"
  - id: modular-close
    resource: https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular
    title: "Modular blog: Qualcomm Completes Acquisition of Modular (2026-07-29)"
    author: org:modular
  - id: mdive-qcom
    resource: https://www.manufacturingdive.com/news/qualcomm-acquires-modular-AI-data-centers-semiconductors/823703/
    title: "Manufacturing Dive: Qualcomm Technologies agrees to acquire Modular for $3.9B (2026-06)"
  - id: lattner-x-close
    resource: https://x.com/clattner_llvm/status/2082470088364753289
    title: "Chris Lattner on X: acquisition completed"
---

# What happened
GV announced on 2026-06-25 that Modular had signed a definitive agreement to be acquired by Qualcomm; press reported the all-stock deal at ~$3.9B at the then share price[^gv-qcom][^mdive-qcom]. Qualcomm and Modular announced completion on 2026-07-29; Mojo, MAX and Modular Cloud continue as brands, and co-founder Tim Davis became SVP/GM of Modular[^modular-close]. Qualcomm's 10-Q records completion on 2026-07-28, valued at ~$3.1B based on Qualcomm's share price, paid mainly in ~18M shares (4M shares, ~$700M, to executives vesting over four years)[^qcom-10q]. Lattner was named EVP of Advanced AI Software and Platforms[^lattner-x-close]. (Press at announcement reported a value of "nearly $4B" at the then Qualcomm share price; the 10-Q figure of ~$3.1B at closing is used here.)

# Why it matters
A chipmaker paid ~2x Modular's Sept 2025 valuation ($1.6B) for hardware-portable AI software — evidence that escaping CUDA lock-in is worth billions to non-NVIDIA silicon vendors.

# Outcome so far
Closed (W3). Three weeks later Modular open-sourced the Mojo compiler.

# Related
- [Mojo & MAX](/projects/ai-inference/mojo-max.md), [Modular](/organizations/modular.md), [Mojo open-sourced](/events/2026-08-mojo-compiler-open-sourced.md)

[^modular-close]: Modular blog, 2026-07-29.
[^mdive-qcom]: Manufacturing Dive, June 2026.
[^gv-qcom]: GV: Modular and Qualcomm — The Next Chapter (2026-06-25) — https://www.gv.com/news/modular-qualcomm-inference
[^qcom-10q]: Qualcomm Form 10-Q (Modular acquisition note) — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
[^lattner-x-close]: Chris Lattner on X: acquisition completed — https://x.com/clattner_llvm/status/2082470088364753289
