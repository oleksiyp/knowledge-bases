---
type: Event
title: BuckleScript rebrands as ReScript, splitting from Reason
description: The BuckleScript team rebranded its OCaml-to-JS compiler and new syntax as ReScript, a standalone JS-focused language, which fractured the Reason community and left Reason itself to stagnate.
event_kind: fork
date: 2020-08-10
era: E1
impact: mixed
languages: [languages/rescript-reason, languages/ocaml, languages/typescript]
runtimes: []
ideas: [ideas/types/typescript-structural-typing-wins]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rescript-rebrand
    resource: https://rescript-lang.org/blog/archived/a-note-on-bucklescripts-future-commitments/
    title: "ReScript blog (archived): A Note on BuckleScript's New Syntax and Its Future Support Commitments"
    author: org:rescript-association
  - id: rescript-association
    resource: https://rescript-association.org/projects/2020/rescript-programming-language
    title: "ReScript Association: New Focus on ReScript (2020)"
    author: org:rescript-association
  - id: wiki-rescript
    resource: https://en.wikipedia.org/wiki/ReScript
    title: "Wikipedia: ReScript"
  - id: melange-why
    resource: https://melange.re/v2.0.0/rationale/
    title: "Melange docs: Why Melange (rationale for the OCaml-compatible fork)"
  - id: rescript-12
    resource: https://rescript-lang.org/blog/release-12-0-0/
    title: "ReScript blog: Announcing ReScript 12 (2025-11-25)"
    author: org:rescript-association
---

# What happened
BuckleScript compiled OCaml and Reason syntax to readable JavaScript. In July 2020 it unveiled a new syntax that diverged from Reason. On 2020-08-10 the project announced the ReScript name with a realigned team and roadmap, and by 13 August BuckleScript was officially called ReScript.[^wiki-rescript][^rescript-rebrand] The stated reason was to stop serving two audiences, OCaml-native and JavaScript developers, and to compete directly with TypeScript as a JS-first typed language.[^rescript-association]

# Why it matters
The split hurt. Reason users had to choose between ReScript, which dropped OCaml compatibility over time, and the community fork Melange, which kept OCaml ecosystem integration.[^melange-why] Meanwhile TypeScript kept absorbing the mainstream. ReScript survived as a small, well-engineered niche: ReScript 12 (November 2025) brought a rewritten build system and finished the move away from its OCaml heritage.[^rescript-12] The episode shows that a sound ML-family type system was not enough to beat TypeScript's gradual, structural, "it's just JavaScript" approach, and that splitting a small community makes things worse.

# Related
- [ReScript / Reason](/languages/rescript-reason.md), [OCaml](/languages/ocaml.md), [TypeScript](/languages/typescript.md)
- [Why TypeScript's structural typing won](/ideas/types/typescript-structural-typing-wins.md)

[^rescript-rebrand]: ReScript blog (archived): A Note on BuckleScript's New Syntax — https://rescript-lang.org/blog/archived/a-note-on-bucklescripts-future-commitments/
[^rescript-association]: ReScript Association: New Focus on ReScript — https://rescript-association.org/projects/2020/rescript-programming-language
[^wiki-rescript]: Wikipedia: ReScript — https://en.wikipedia.org/wiki/ReScript
[^melange-why]: Melange docs: Why Melange — https://melange.re/v2.0.0/rationale/
[^rescript-12]: ReScript blog: Announcing ReScript 12 — https://rescript-lang.org/blog/release-12-0-0/
