---
type: Idea
title: JIT compilation for dynamic languages
description: 'JIT outcomes were workload-dependent: established Ruby optimization work, limited typical-web gains
  in PHP 8, and experimental CPython gains with continuing maintenance costs.'
area: runtime-performance
tags:
- runtime-performance
outcome: mixed
maturity_2026: adopted
languages:
- languages/python
- languages/ruby
- languages/php
runtimes:
- runtimes/cpython
- runtimes/cruby-yjit
- runtimes/php-zend
- runtimes/pypy
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: php8
  title: PHP 8.0 release announcement
  resource: https://www.php.net/releases/8.0/en.php
- id: jit2026
  title: 'Ken Jin: Python 3.15 JIT progress, 23 March 2026'
  resource: https://blog.python.org/2026/03/jit-on-track/
- id: pep744
  title: 'PEP 744: JIT Compilation (informational draft)'
  resource: https://peps.python.org/pep-0744/
- id: zjit
  title: 'Shopify: ZJIT has been merged into Ruby, 14 May 2025'
  resource: https://railsatscale.com/2025-05-14-merge-zjit/
- id: pep836
  title: 'PEP 836: Draft path to a supported CPython JIT'
  resource: https://peps.python.org/pep-0836/
- id: python315
  title: 'Python 3.15.0rc3: Experimental JIT improvements'
  resource: https://docs.python.org/3.15/whatsnew/3.15.html
---

# Summary
**Verdict: mixed across languages and workloads.** A compiler can remove interpretation overhead without speeding up a complete application much. PHP 8's own announcement distinguished synthetic gains from typical application performance. CPython's first JIT releases likewise did not establish universal speedups.[^php8][^jit2026]

# The idea
Observe executing code, specialize for common cases, then produce machine code. Guards preserve dynamic behavior by returning to a generic path when assumptions fail. The return depends on how much work runs in the optimized region and whether warmup and code-memory costs are amortized.[^pep744][^zjit]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020 | PHP 8 introduces tracing and function JITs | mixed [^php8] |
| E4 | Python 3.13 / 3.14 | Experimental CPython JIT often fails to beat interpretation | mixed [^jit2026] |
| E4 | 2025-05-14 | ZJIT merged into Ruby as an early project | experimental [^zjit] |
| E4 | 2026-03-23 | CPython reports improved 3.15-alpha results | promising [^jit2026] |

# Where it succeeded
Ruby's YJIT provided enough foundation for the same team to invest in ZJIT. The newer design adds a high-level SSA representation and method-level optimization, with contributor accessibility among its stated goals. This is evidence of continuing investment, not proof that ZJIT had replaced YJIT.[^zjit]

In March 2026, CPython reported preliminary geometric-mean improvements of 5–6% on x86-64 Linux and 11–12% on macOS AArch64, against different interpreter baselines. Individual results ranged from slowdowns to much larger gains.[^jit2026]

# Where it failed or stalled
PHP 8 reported roughly threefold synthetic performance, but typical applications remained comparable to PHP 7.4. A fast arithmetic benchmark was a poor predictor of a web application's benefit.[^php8]

CPython's initial JIT often ran slower in 3.13/3.14. Losing its main sponsor in 2025 exposed a maintenance risk; subsequent progress relied on a wider contributor group. The March 2026 figures describe development builds, not a final Python 3.15 release verdict.[^jit2026]

# Why
**Synthesis:** winning JIT work combines workload fit with a sustainable implementation. A simple backend can reduce engineering cost, while profiling, trace selection and optimization determine whether it emits enough useful fast code. A language's native libraries and I/O also bound the fraction a JIT can accelerate.[^pep744][^php8]

# Lessons
- Report baseline, platform, warmup, memory and whole-application results.
- Keep experimental compiler progress separate from deployment claims.
- Treat long-term compiler staffing as part of the design.

# Cutoff update
PEP 836, created on 2 July 2026, proposes a path toward a supported JIT for Python 3.16. It remains a draft as of this review; it is not evidence that the experimental JIT has already been promoted.[^pep836]

The 3.15.0rc3 documentation reports 7–8% geometric-mean improvement over the standard interpreter on x86-64 Linux and 11–12% over the tail-calling interpreter on AArch64 macOS. Individual benchmarks range from about 15% slower to over 100% faster. These are prerelease measurements with different baselines, not a final-release or universal application result.[^python315]

# Related
- [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md)
- [CRuby and YJIT](/runtimes/cruby-yjit.md)
- [PyPy](/runtimes/pypy.md)

[^php8]: PHP 8.0 release announcement — https://www.php.net/releases/8.0/en.php
[^jit2026]: Ken Jin: Python 3.15 JIT progress, 23 March 2026 — https://blog.python.org/2026/03/jit-on-track/
[^pep744]: PEP 744: JIT Compilation (informational draft) — https://peps.python.org/pep-0744/
[^zjit]: Shopify: ZJIT has been merged into Ruby, 14 May 2025 — https://railsatscale.com/2025-05-14-merge-zjit/
[^pep836]: PEP 836: Draft path to a supported CPython JIT — https://peps.python.org/pep-0836/
[^python315]: Python 3.15.0rc3: Experimental JIT improvements — https://docs.python.org/3.15/whatsnew/3.15.html
