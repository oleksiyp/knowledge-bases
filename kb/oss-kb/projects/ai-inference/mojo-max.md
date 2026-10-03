---
type: OSS Project
title: Modular Mojo & MAX
description: "Chris Lattner's Mojo language and MAX inference stack; Modular raised $250M at $1.6B (Sep 2025), bought BentoML (Feb 2026), was acquired by Qualcomm for ~$3.1B (closed Jul 2026) and then open-sourced the Mojo compiler under Apache-2.0 (Aug 2026) — business success, OSS growing."
resource: https://github.com/modular/modular
tags: [ai-inference, compiler, language, apache-2.0-llvm-exception, acquired, open-core]
domain: ai-inference
license: Apache-2.0 WITH LLVM-exception (Mojo compiler, stdlib, repo); MAX commercial use under Modular's own terms
license_history: ["Mojo stdlib Apache-2.0 w/ LLVM exceptions (2024-)", "Mojo compiler proprietary binary (2023 → 2026-08)", "Mojo compiler Apache-2.0 w/ LLVM exceptions (2026-08-18-)"]
governance: single-vendor
steward: Qualcomm (via Modular, since 2026-07-28)
backing_orgs: [organizations/modular]
metrics:
  github_stars: { value: 29921, as_of: 2026-10-03 }
  commits_last_3_months: { value: 4288, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: modular-gh
    resource: https://github.com/modular/modular
    title: Modular GitHub repository (stars, commits, LICENSE via GitHub API)
  - id: yahoo-modular-250
    resource: https://finance.yahoo.com/news/ai-startup-modular-raises-250-160943605.html
    title: "Reuters/Yahoo: AI startup Modular raises $250 million, seeks to challenge Nvidia dominance"
  - id: modular-bento
    resource: https://www.modular.com/blog/bentoml-joins-modular
    title: "Modular: BentoML Joins Modular (2026-02-10)"
    author: org:modular
  - id: gv-qcom
    resource: https://www.gv.com/news/modular-qualcomm-inference
    title: "GV: Modular and Qualcomm — The Next Chapter (2026-06-25)"
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: Qualcomm Form 10-Q for quarter ended 2026-06-28 (Modular acquisition note)
    author: org:qualcomm
  - id: lattner-x-close
    resource: https://x.com/clattner_llvm/status/2082470088364753289
    title: "Chris Lattner on X: Qualcomm has completed its acquisition of Modular"
  - id: rw-mojo
    resource: https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
    title: "RuntimeWire: Modular open-sources Mojo three weeks after Qualcomm acquisition"
  - id: linuxiac-mojo
    resource: https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
    title: "Linuxiac: Mojo Programming Language Goes Fully Open Source"
---

# Summary
Modular is the domain's biggest business success story by exit value. It raised a $250M Series C at $1.6B post-money in September 2025 ($380M raised in total)[^yahoo-modular-250][^rw-mojo], acquired BentoML on 2026-02-10[^modular-bento], signed a definitive agreement to be acquired by Qualcomm on 2026-06-25[^gv-qcom], and closed on 2026-07-28 at approximately $3.1B, paid mainly in 18M Qualcomm shares[^qcom-10q]. Chris Lattner became Qualcomm EVP of Advanced AI Software and Platforms[^lattner-x-close]. Then, fulfilling a long-standing promise, Modular released Mojo 1.0 (2026-08-11) and open-sourced the compiler under Apache-2.0 with LLVM exceptions on 2026-08-18, though outside compiler contributions won't be accepted until end of 2026 and MAX remains under Modular's commercial terms[^rw-mojo][^linuxiac-mojo]. Verdict: business acquired (successful exit); OSS growing but still single-vendor.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-24 | $250M Series C at $1.6B (led by US Innovative Technology Fund)[^yahoo-modular-250][^rw-mojo] | Business | + |
| W9 | 2026-02-10 | Acquires BentoML; BentoML stays Apache-2.0[^modular-bento] | Business | + |
| W6 | 2026-06-25 | Definitive agreement to be acquired by Qualcomm[^gv-qcom] | Business | + |
| W3 | 2026-07-28 | Acquisition closes (~$3.1B in Qualcomm stock)[^qcom-10q][^lattner-x-close] | Business | + |
| W3 | 2026-08-11 | Mojo 1.0.0[^rw-mojo] | OSS | + |
| W3 | 2026-08-18 | Mojo compiler open-sourced (Apache-2.0 w/ LLVM exceptions)[^rw-mojo][^linuxiac-mojo] | OSS/license | + |

# OSS successes
- Delivered on the long-promised compiler open-sourcing[^linuxiac-mojo]; repo commit velocity (4,288 in W3) rivals vLLM[^modular-gh].
- Modular says MAX continues to support competing hardware (AWS Trainium, Google TPUs)[^rw-mojo].
# OSS failures / risks
- Compiler contributions still closed until end-2026[^linuxiac-mojo]; MAX not fully open[^rw-mojo].
- Hardware neutrality now depends on Qualcomm's priorities.
# Business successes
- ~$3.1B exit vs $1.6B Series C ten months earlier[^qcom-10q][^yahoo-modular-250].
# Business failures / risks
- BentoML, acquired five months before the Qualcomm deal, shows sharply reduced activity (see BentoML file).

# By window
## W3
- Qualcomm close; Mojo 1.0; compiler open-sourced[^qcom-10q][^rw-mojo].
## W6
- Qualcomm agreement (2026-06-25)[^gv-qcom].
## W9
- BentoML acquisition (2026-02-10)[^modular-bento].
## W12
- No notable events found.
## W24
- $250M Series C (Sep 2025)[^yahoo-modular-250].

# Lessons
- "Hardware-portable AI software" is a strategic asset chipmakers will pay billions for to escape CUDA lock-in.
- Promised open-sourcing can be timed to a strategic owner's interest in ecosystem growth.

# Related
- [Modular](/organizations/modular.md), [Mojo (devtools view)](/projects/devtools-languages/mojo.md), [BentoML](/projects/ai-inference/bentoml.md), [Triton](/projects/ai-inference/triton.md)
- [Event: Qualcomm acquires Modular](/events/2026-06-qualcomm-acquires-modular.md), [Event: Modular acquires BentoML](/events/2026-02-modular-acquires-bentoml.md), [Event: Mojo open-sourced](/events/2026-08-mojo-compiler-open-sourced.md)

[^modular-gh]: Modular GitHub — https://github.com/modular/modular
[^yahoo-modular-250]: Yahoo Finance (Reuters) — https://finance.yahoo.com/news/ai-startup-modular-raises-250-160943605.html
[^modular-bento]: Modular blog, 2026-02-10 — https://www.modular.com/blog/bentoml-joins-modular
[^gv-qcom]: GV, 2026-06-25 — https://www.gv.com/news/modular-qualcomm-inference
[^qcom-10q]: Qualcomm 10-Q (SEC) — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
[^lattner-x-close]: Chris Lattner on X — https://x.com/clattner_llvm/status/2082470088364753289
[^rw-mojo]: RuntimeWire — https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
[^linuxiac-mojo]: Linuxiac — https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
