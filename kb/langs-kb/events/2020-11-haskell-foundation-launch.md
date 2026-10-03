---
type: Event
title: Haskell Foundation launched
description: Simon Peyton Jones announced the Haskell Foundation, a non-profit to broaden Haskell adoption and fund core infrastructure, at Haskell eXchange on 2020-11-04 with about $500K in commitments; by 2026 it had dropped its full-time executive director role amid tight funding.
event_kind: governance
date: 2020-11-04
era: E1
impact: mixed
languages: [languages/haskell]
runtimes: [runtimes/ghc-runtime]
ideas: []
tags: [haskell, foundation, governance, funding]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: iprog-hf
    resource: https://www.i-programmer.info/news/98-languages/14123-haskell-foundation-launched.html
    title: "I Programmer: Haskell Foundation Launched"
  - id: tweag-hf
    resource: https://www.tweag.io/blog/2021-03-26-haskell-foundation-backstory/
    title: "Tweag: Incubating the Haskell Foundation"
  - id: iohk-hf
    resource: https://iohk.io/en/blog/posts/2020/11/04/iohk-sponsors-new-haskell-foundation/
    title: "IOHK blog: IOHK sponsors new Haskell Foundation (2020-11-04)"
  - id: hf-q1-2025
    resource: https://discourse.haskell.org/t/haskell-foundation-q1-2025-update/11835
    title: "Haskell Discourse: Haskell Foundation Q1 2025 Update"
  - id: hf-2026
    resource: https://discourse.haskell.org/t/haskell-foundation-2026-update/14136
    title: "Haskell Discourse: Haskell Foundation 2026 Update (2026-05-20)"
---

# What happened
On 2020-11-04, at the Haskell eXchange conference, Simon Peyton Jones announced the Haskell Foundation. It was an independent non-profit meant to broaden Haskell adoption by supporting tools, libraries, education and research.[^iprog-hf] Tweag had incubated it. It launched with about $500K in cash and pledges, a volunteer board of 14, and two full-time staff: an executive director (Andrew Boardman) and a CTO (Emily Pillmore).[^tweag-hf] IOHK, which builds Cardano in Haskell, was a founding sponsor.[^iohk-hf]

# Why it matters
This was Haskell's attempt to copy what the Rust Foundation, the Python Software Foundation and others did: pay for the unglamorous work (installers, GHCup, CI, the security advisory database, error-message documentation) that academics and consultancies had done in their spare time. The results by 2026 were mixed. The Foundation helped coordinate tooling, but it had trouble raising money. In early 2025 it said open-source foundations "struggled to raise funds in the high interest-rate economic environment" and that it had applied for an NSF POSE grant.[^hf-q1-2025] In May 2026 the board restructured. The executive director left in June 2026 and was not replaced with another full-time director. Most funds went to technical work, run by a new technical committee. Sponsorship was described as "heavily skewed towards a few large sponsors".[^hf-2026]

# Related
- [Haskell](/languages/haskell.md), [GHC runtime](/runtimes/ghc-runtime.md)
- [GHC 9.0 ships LinearTypes](/events/2021-02-ghc-9-0-linear-types.md)

[^iprog-hf]: I Programmer: Haskell Foundation Launched — https://www.i-programmer.info/news/98-languages/14123-haskell-foundation-launched.html
[^tweag-hf]: Tweag: Incubating the Haskell Foundation — https://www.tweag.io/blog/2021-03-26-haskell-foundation-backstory/
[^iohk-hf]: IOHK sponsors new Haskell Foundation — https://iohk.io/en/blog/posts/2020/11/04/iohk-sponsors-new-haskell-foundation/
[^hf-q1-2025]: Haskell Foundation Q1 2025 Update — https://discourse.haskell.org/t/haskell-foundation-q1-2025-update/11835
[^hf-2026]: Haskell Foundation 2026 Update — https://discourse.haskell.org/t/haskell-foundation-2026-update/14136
