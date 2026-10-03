---
type: Organization
title: Modular
description: AI compute-infrastructure company behind the Mojo language and MAX platform; raised $250M at $1.6B in Sept 2025 ($380M total), was acquired by Qualcomm for ~$3.1B in stock (closed 2026-07-28) and open-sourced the Mojo compiler at 1.0 in Aug 2026.
resource: https://www.modular.com
tags: [commercial-open-source, ai-infrastructure, programming-language, mojo]
org_kind: coss-startup
hq: USA
funding: { total_usd: "380M", last_round: "$250M (US Innovative Technology Fund lead; DFJ Growth, GV, General Catalyst, Greylock)", last_round_date: 2025-09-24, valuation_usd: "1.6B (Sept 2025); ~3.1B acquisition value in Qualcomm stock at close (2026-07-28)" }
business_verdict: acquired
projects: [projects/devtools-languages/mojo]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: modular-250m
    resource: https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer
    title: "Modular blog: Modular raises $250M to scale AI's unified compute layer"
  - id: wiki-mojo
    resource: https://en.wikipedia.org/wiki/Mojo_(programming_language)
    title: "Wikipedia: Mojo (programming language)"
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: Qualcomm Form 10-Q (quarter ended 2026-06-28) — Modular acquisition note
    author: org:qualcomm
  - id: gv-qcom
    resource: https://www.gv.com/news/modular-qualcomm-inference
    title: "GV: Modular and Qualcomm — The Next Chapter for Unified AI Inference (2026-06-25)"
  - id: lattner-x-close
    resource: https://x.com/clattner_llvm/status/2082470088364753289
    title: "Chris Lattner on X: Qualcomm has completed its acquisition of Modular"
  - id: modular-bento
    resource: https://www.modular.com/blog/bentoml-joins-modular
    title: "Modular blog: BentoML Joins Modular (2026-02-10)"
  - id: rw-mojo
    resource: https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
    title: "RuntimeWire: Modular open-sources Mojo three weeks after Qualcomm acquisition"
---

# Summary
Founded by Chris Lattner and Tim Davis, Modular raised $250M on 2025-09-24, led by Thomas Tull's US Innovative Technology Fund with DFJ Growth, GV, General Catalyst and Greylock. The round valued it at $1.6B (nearly triple its previous valuation) and brought total funding to $380M.[^modular-250m] It agreed on 2026-06-25 to be acquired by Qualcomm; the all-stock deal closed on 2026-07-28 (completion announced 2026-07-29) at ~$3.1B based on Qualcomm's share price (~18M shares; press at announcement cited "nearly $4B" at the then share price)[^gv-qcom][^qcom-10q]. Modular then shipped Mojo 1.0 on 2026-08-11 and open-sourced the compiler (Apache-2.0 with LLVM exceptions) on 2026-08-18.[^wiki-mojo][^rw-mojo]

# Business timeline
| Date | Event |
|---|---|
| 2024-03 | Mojo stdlib open-sourced [^wiki-mojo] |
| 2025-09-24 | $250M at $1.6B [^modular-250m] |
| 2026-02-10 | Acquires BentoML [^modular-bento] |
| 2026-06-25 | Definitive agreement to be acquired by Qualcomm [^gv-qcom] |
| 2026-07-28 | Acquisition closes (~$3.1B in Qualcomm stock) [^qcom-10q] |
| 2026-08-11 | Mojo 1.0 [^wiki-mojo] |
| 2026-08-18 | Mojo compiler open-sourced [^wiki-mojo] |

# Monetization model
Enterprise AI inference/compute platform (MAX); Mojo is the open language layer.

# Successes
- Large late-stage round; language reaches 1.0 and full open source.[^modular-250m][^wiki-mojo]

# Failures / risks
- Revenue undisclosed; competes with CUDA/Triton ecosystems.

# Related
- [Mojo](/projects/devtools-languages/mojo.md)

[^modular-250m]: Modular blog — https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer
[^wiki-mojo]: Wikipedia: Mojo — https://en.wikipedia.org/wiki/Mojo_(programming_language)


## Additional notes (ai-inference)
- **Acquired by Qualcomm.** Modular signed a definitive agreement to be acquired by Qualcomm on 2026-06-25[^gv-qcom]; the deal closed on 2026-07-28, valued at approximately $3.1B based on Qualcomm's share price, paid primarily in ~18M Qualcomm shares (4M, ~$700M, to executives subject to four-year service vesting)[^qcom-10q]. Chris Lattner became Qualcomm EVP of Advanced AI Software and Platforms[^lattner-x-close]. Business verdict is `acquired` (successful exit at ~2x the Sept 2025 valuation); the Mojo 1.0 / compiler open-sourcing happened *after* the close[^rw-mojo].
- **BentoML acquisition.** Modular bought BentoML on 2026-02-10 (terms undisclosed), pledging Apache-2.0 continuity[^modular-bento]; BentoML's repo activity has since fallen to a handful of commits per quarter — see [BentoML](/projects/ai-inference/bentoml.md).
- **MAX** inference framework remains under Modular's commercial terms rather than fully open source; Modular says it will keep supporting non-Qualcomm hardware (AWS Trainium, Google TPUs)[^rw-mojo].
- Related: [Mojo & MAX (ai-inference view)](/projects/ai-inference/mojo-max.md), [Event: Qualcomm acquires Modular](/events/2026-06-qualcomm-acquires-modular.md), [Event: Modular acquires BentoML](/events/2026-02-modular-acquires-bentoml.md), [AI inference review](/domains/ai-inference.md)

[^qcom-10q]: Qualcomm 10-Q — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
[^gv-qcom]: GV — https://www.gv.com/news/modular-qualcomm-inference
[^lattner-x-close]: Chris Lattner on X — https://x.com/clattner_llvm/status/2082470088364753289
[^modular-bento]: Modular blog — https://www.modular.com/blog/bentoml-joins-modular
[^rw-mojo]: RuntimeWire — https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
