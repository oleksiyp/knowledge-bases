---
type: Event
title: Mojo 1.0 and open-source compiler
description: Modular released Mojo 1.0 on 2026-08-11 and open-sourced the Mojo compiler under Apache-2.0 with LLVM exceptions on 2026-08-18.
event_kind: license-change
date: 2026-08-18
window: W3
impact: positive
projects: [projects/devtools-languages/mojo]
organizations: [organizations/modular]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-mojo
    resource: https://en.wikipedia.org/wiki/Mojo_(programming_language)
    title: "Wikipedia: Mojo (programming language)"
  - id: modular-250m
    resource: https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer
    title: "Modular blog: Modular raises $250M"
  - id: rw-mojo
    resource: https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
    title: "RuntimeWire: Modular open-sources Mojo three weeks after Qualcomm acquisition"
  - id: linuxiac-mojo
    resource: https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
    title: "Linuxiac: Mojo Programming Language Goes Fully Open Source"
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: Qualcomm Form 10-Q (Modular acquisition completed 2026-07-28)
  - id: modcon-26
    resource: https://www.modular.com/blog/modcon-announcements
    title: "Modular blog: ModCon 2026 — open source, open cloud, open silicon"
    author: org:modular
  - id: linuxiac-mojo1
    resource: https://linuxiac.com/mojo-1-0-programming-language-officially-released/
    title: "Linuxiac: Mojo 1.0 programming language officially released (2026-08-11)"
---

# What happened
After open-sourcing the standard library in March 2024 and shipping 1.0 beta 1 on 2026-05-07, Modular declared Mojo 1.0 stable on 2026-08-11. A week later, on 2026-08-18, it open-sourced the compiler under Apache-2.0 with LLVM exceptions.[^wiki-mojo][^modcon-26] Since the standard library opened in 2024, the project has merged ~1,100 PRs from ~200 external contributors.[^linuxiac-mojo1]

# Why it matters
Most of this period's license changes moved toward more restriction. This one went the other way: a VC-backed company ($380M raised, valued at $1.6B in Sept 2025) opened its core proprietary asset.[^modular-250m]

# Outcome so far
Too early to measure adoption. The combined Modular repository has about 30k GitHub stars.

# Related
- [Mojo](/projects/devtools-languages/mojo.md), [Modular](/organizations/modular.md)

[^wiki-mojo]: Wikipedia: Mojo — https://en.wikipedia.org/wiki/Mojo_(programming_language)
[^modular-250m]: Modular blog — https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer


## Additional notes (ai-inference)
- **Context missing above: Modular was no longer independent.** Qualcomm completed its ~$3.1B (stock) acquisition of Modular on 2026-07-28[^qcom-10q], three weeks before the compiler release, so the "VC-backed company opening its core asset" framing should read as "newly Qualcomm-owned Modular" — the open-sourcing serves a chipmaker's interest in a hardware-portable alternative to CUDA[^rw-mojo].
- Caveats: Modular is not accepting outside contributions to the compiler/tools until end of 2026[^linuxiac-mojo], and the MAX inference framework remains under Modular's commercial terms[^rw-mojo].
- Related: [Mojo & MAX (ai-inference)](/projects/ai-inference/mojo-max.md), [Qualcomm acquires Modular](/events/2026-06-qualcomm-acquires-modular.md)

[^rw-mojo]: RuntimeWire — https://runtimewire.com/article/chris-lattner-open-sources-mojo-qualcomm-modular
[^linuxiac-mojo]: Linuxiac — https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
[^qcom-10q]: Qualcomm 10-Q — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
[^modcon-26]: Modular blog, ModCon 2026.
[^linuxiac-mojo1]: Linuxiac, 2026-08-11.
