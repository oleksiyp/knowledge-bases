---
type: Language
title: 'COBOL and Fortran: legacy continuity and modernization'
description: New compilers and migration services demonstrate continuing investment. COBOL business-system replacement
  and Fortran numerical evolution have different success criteria.
trajectory: stable
tags:
- language-evolution
paradigms:
- procedural
- domain-specific
typing: static
memory_model: mixed
steward: Standards committees and multiple compiler vendors
governance: committee-standard
ideas:
- ideas/ai-and-languages/ai-assisted-code-migration
runtimes:
- runtimes/gcc
- runtimes/llvm
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: gcc15
  title: GCC 15 changes
  resource: https://gcc.gnu.org/gcc-15/changes.html
- id: flang
  title: 'LLVM: Goodbye flang-new, hello flang, 11 March 2025'
  resource: https://blog.llvm.org/posts/2025-03-11-flang-new/
- id: aws-transform
  title: AWS Transform for mainframe GA, 15 May 2025
  resource: https://aws.amazon.com/about-aws/whats-new/2025/05/aws-transform-mainframe-generally-available/
- id: lfortran
  title: LFortran project status
  resource: https://lfortran.org/
---

# Summary
**Verdict: continued investment, not simple extinction or revival.** COBOL and Fortran share long histories but serve different workloads. During this period, compiler development and modernization offerings supplied evidence that existing code still justified engineering investment.[^gcc15][^flang][^aws-transform]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E3 | compiler development | New Fortran implementation work leads toward later release milestones | investment [^flang] |
| E4 | 2025-03-11 | LLVM announces Flang's compiler-name transition in LLVM 20 | + [^flang] |
| E4 | GCC 15, 2025 | GCC adds a COBOL frontend | + / incomplete [^gcc15] |
| E4 | 2025-05-15 | AWS Transform for mainframe becomes generally available | migration tooling [^aws-transform] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Preserve source investment while modernizing compilers | Flang and GCC COBOL provide concrete examples [^flang][^gcc15] |
| Translate legacy systems to newer platforms | Commercial tooling exists; correctness remains workload-specific [^aws-transform] |
| Make Fortran interactive as well as compiled | LFortran explores this approach with a published maturity boundary [^lfortran] |

# What succeeded
LLVM 20's Flang transition marks progress toward a regular compiler experience under the expected executable name. The project report describes both accomplished work and remaining tasks; the rename is not a claim of universal vendor-compiler parity.[^flang]

AWS's release established availability of automated mainframe analysis and modernization workflows. It shows demand for migration assistance, without independently proving a particular speedup or that transformed applications need no validation.[^aws-transform]

# What failed or stalled
GCC's COBOL implementation initially targeted selected 64-bit architectures and omitted some standardized features. Existing dialects, data formats and platform services still matter when evaluating real applications.[^gcc15]

LFortran still identifies itself as alpha and tracks progress toward beta using production-code compilation milestones. Its interactive design does not imply that every existing Fortran codebase is production-ready on it.[^lfortran]

# By era
- **E1–E3:** compiler engineering preserves the option of evolving established code.[^flang]
- **E4:** new compiler releases and migration services make that investment visible.[^gcc15][^aws-transform]

# Lessons
**Synthesis:** distinguish maintaining a language, modernizing its tooling, rehosting a system and rewriting business logic. A translation that compiles can still change numerical behavior, record handling or operational guarantees. Successful modernization needs workload-level validation, while successful retention can mean a better compiler without a language switch.

# Related
- [GCC](/runtimes/gcc.md)
- [LLVM](/runtimes/llvm.md)
- [AI-assisted migration](/ideas/ai-and-languages/ai-assisted-code-migration.md)

[^gcc15]: GCC 15 changes — https://gcc.gnu.org/gcc-15/changes.html
[^flang]: LLVM: Goodbye flang-new, hello flang, 11 March 2025 — https://blog.llvm.org/posts/2025-03-11-flang-new/
[^aws-transform]: AWS Transform for mainframe GA, 15 May 2025 — https://aws.amazon.com/about-aws/whats-new/2025/05/aws-transform-mainframe-generally-available/
[^lfortran]: LFortran project status — https://lfortran.org/
