---
type: Idea
title: Gradual typing for dynamic languages
description: Optional types succeeded as an incremental engineering tool in Python and Ruby; annotation semantics,
  checker consistency and escape hatches remained sources of friction.
area: types
tags:
- types
outcome: succeeded
maturity_2026: mainstream
languages:
- languages/python
- languages/ruby
- languages/php
- languages/lua-luau
runtimes:
- runtimes/cpython
- runtimes/cruby-yjit
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: pep729
  title: 'PEP 729: Typing governance process'
  resource: https://peps.python.org/pep-0729/
- id: sorbet
  title: 'Stripe: Open-sourcing Sorbet, 20 June 2019'
  resource: https://sorbet.org/blog/2019/06/20/open-sourcing-sorbet
- id: ruby3
  title: Ruby 3.0.0 release, 25 December 2020
  resource: https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
- id: pep649
  title: 'PEP 649: Deferred Evaluation of Annotations'
  resource: https://peps.python.org/pep-0649/
- id: pep563
  title: 'PEP 563: Postponed Evaluation of Annotations (superseded)'
  resource: https://peps.python.org/pep-0563/
---

# Summary
**Verdict: succeeded as tooling, not as automatic runtime soundness.** Dynamic languages gained practical ways to annotate and check existing code incrementally. Python created a Typing Council and a shared specification process; Ruby gained both Sorbet and RBS. These are concrete ecosystem investments, rather than evidence that all code became typed.[^pep729][^sorbet][^ruby3]

# The idea
A project can check selected modules while leaving other code dynamic. This reduces the initial migration cost, but unchecked boundaries still matter. Python annotations are also consumed by runtime libraries, so their evaluation semantics affect more than static checkers.[^pep649]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-06-20 | Stripe open-sources Sorbet | + [^sorbet] |
| E2 | 2020-12-25 | Ruby 3 ships RBS type-description language | + [^ruby3] |
| E3 | 2023 | PEP 729 establishes typing governance | + [^pep729] |
| E4 | Python 3.14 | Deferred annotation evaluation follows PEP 649 | correction [^pep649] |

# Where it succeeded
Sorbet was developed against Stripe's large Ruby codebase, and its release described incremental adoption and fast feedback. This provides a named deployment context, though the sponsor's report should not be read as an independent productivity experiment.[^sorbet]

RBS records Ruby type signatures separately, supporting analysis without requiring the core language to adopt mandatory static typing. Python's governance work addresses the interoperability problem created by several independently implemented checkers.[^ruby3][^pep729]

# Where it failed or stalled
Python's PEP 563 approach to postponed annotations was superseded rather than becoming the final default. PEP 649 replaced string-based postponement with deferred evaluation, addressing problems for consumers that need runtime annotation values.[^pep563][^pep649]

A permissive annotation or unchecked boundary cannot certify everything crossing it. Governance and a common specification reduce checker disagreement, but do not eliminate every implementation difference or dynamic behavior.[^pep729]

# Why
**Synthesis:** optional adoption let teams purchase useful checking without rewriting their systems. The cost shifted into stubs, checker behavior and the relationship between runtime and static semantics. The annotation reversal demonstrates that a design can work for static tools yet impose unacceptable costs on other users.[^pep649]

# Lessons
- Measure useful coverage and escaped errors, not annotation count alone.
- Treat stubs and checker versions as maintained dependencies.
- Keep runtime validation separate from static checking claims.

# Related
- [Python](/languages/python.md)
- [Python superset languages](/ideas/types/python-superset-languages.md)
- [TypeScript structural typing](/ideas/types/typescript-structural-typing-wins.md)

[^pep729]: PEP 729: Typing governance process — https://peps.python.org/pep-0729/
[^sorbet]: Stripe: Open-sourcing Sorbet, 20 June 2019 — https://sorbet.org/blog/2019/06/20/open-sourcing-sorbet
[^ruby3]: Ruby 3.0.0 release, 25 December 2020 — https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
[^pep649]: PEP 649: Deferred Evaluation of Annotations — https://peps.python.org/pep-0649/
[^pep563]: PEP 563: Postponed Evaluation of Annotations (superseded) — https://peps.python.org/pep-0563/
