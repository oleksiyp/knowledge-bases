---
type: Runtime
title: CPython
description: "The reference Python interpreter went from 'deliberately simple and slow' to a performance-engineering project between 2018 and 2026. Specialisation made 3.11 25% faster. The GIL became optional (3.13) and then supported (3.14). A copy-and-patch JIT shipped experimentally and only paid off in 3.15. The program survived Microsoft cancelling its funding in 2025."
tags: [cpython, python, interpreter, jit, free-threading, faster-cpython, specialization, subinterpreters]
runtime_kind: interpreter
languages: [languages/python]
ideas: [ideas/concurrency/gil-removal-free-threading, ideas/concurrency/subinterpreters, ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/copy-and-patch-jit, ideas/runtime-performance/startup-snapshotting]
trajectory: growing
steward: Python Software Foundation / Python Steering Council
governance: foundation
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: shannon-plan
    resource: https://github.com/markshannon/faster-cpython/blob/master/plan.md
    title: "Mark Shannon: faster-cpython plan (5x in four stages, Oct 2020)"
  - id: lwn-making-faster
    resource: https://lwn.net/Articles/857754/
    title: "LWN: Making CPython faster (May 2021)"
  - id: whatsnew-311
    resource: https://docs.python.org/3/whatsnew/3.11.html
    title: "What's New in Python 3.11"
    author: org:python-software-foundation
  - id: pep684
    resource: https://peps.python.org/pep-0684/
    title: "PEP 684: A Per-Interpreter GIL (Python 3.12)"
  - id: pep703-sc
    resource: https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
    title: "Steering Council notice about PEP 703 (2023-07-28)"
  - id: pep744
    resource: https://peps.python.org/pep-0744/
    title: "PEP 744: JIT Compilation"
  - id: whatsnew-313
    resource: https://docs.python.org/3/whatsnew/3.13.html
    title: "What's New in Python 3.13"
    author: org:python-software-foundation
  - id: whatsnew-314
    resource: https://docs.python.org/3/whatsnew/3.14.html
    title: "What's New in Python 3.14"
    author: org:python-software-foundation
  - id: pep779
    resource: https://peps.python.org/pep-0779/
    title: "PEP 779: Criteria for supported status for free-threaded Python"
  - id: tailcall-apology
    resource: https://fidget-spinner.github.io/posts/apology-tail-call.html
    title: "Ken Jin: I'm Sorry for Python's tail-calling Interpreter's Results (2025)"
  - id: lwn-jit-2025
    resource: https://lwn.net/Articles/1029307/
    title: "LWN: Following up on the Python JIT (July 2025)"
  - id: reg-layoff
    resource: https://www.theregister.com/software/2025/05/16/microsofts-latest-layoffs-hit-software-engineers-hard/1240892
    title: "The Register: Microsoft's latest layoffs hit software engineers hard"
  - id: stewardship
    resource: https://discuss.python.org/t/community-stewardship-of-faster-cpython/92153
    title: "discuss.python.org: Community Stewardship of Faster CPython (2025-05-16)"
  - id: jit-on-track
    resource: https://blog.python.org/2026/03/jit-on-track/
    title: "Python Insider (Ken Jin): Python 3.15's JIT is now back on track (March 2026)"
    author: org:python-software-foundation
  - id: whatsnew-315
    resource: https://docs.python.org/3.15/whatsnew/3.15.html
    title: "What's New in Python 3.15 (rc3 docs)"
    author: org:python-software-foundation
  - id: pep836
    resource: https://peps.python.org/pep-0836/
    title: "PEP 836: JIT Go Brrr — The Path to a Supported JIT Compiler for CPython (Draft, 2026-07-02)"
  - id: pep790
    resource: https://peps.python.org/pep-0790/
    title: "PEP 790: Python 3.15 Release Schedule"
  - id: summit-2026
    resource: https://blog.python.org/2026/09/language-summit-2026-lightning-talks/
    title: "Python Insider: Lightning Talks (Python Language Summit 2026)"
    author: org:python-software-foundation
---

# Summary
CPython's arc in 2018–2026 is **the slowest major runtime finally taking performance seriously, mostly succeeding, and nearly losing its funding halfway through**. Mark Shannon's October 2020 plan promised 5x in four 1.5x stages.[^shannon-plan] Microsoft funded it from 2021 as "Faster CPython", with Guido van Rossum on the team.[^lwn-making-faster]

What it delivered:
- **3.11:** about 25% faster, through PEP 659 specialisation.[^whatsnew-311]
- **3.12–3.14:** about 4%, 7% and 8% more, close to 50% cumulative in under four years.[^lwn-jit-2025]

In parallel, Meta-funded work led by Sam Gross made the **GIL optional** (PEP 703, intent to accept July 2023). It was experimental in 3.13 and supported in 3.14, with a single-thread penalty of about 5–10%.[^pep703-sc][^pep779] The copy-and-patch **JIT** (PEP 744) gave roughly 0–1% speedups in 3.13 and 3.14. By 3.15 it was 5–8% faster on x86-64 Linux and 11–13% on AArch64 macOS.[^pep744][^jit-on-track][^whatsnew-315]

Microsoft cancelled the team in May 2025.[^reg-layoff] The work continued under community stewardship. PEP 836 (draft, July 2026) sets explicit targets the JIT must meet by 3.17 or face consequences.[^stewardship][^pep836]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-10 | Shannon's "5x in 4 years" plan published [^shannon-plan] | + |
| E2 | 2021-05 | Microsoft-funded Faster CPython team announced [^lwn-making-faster] | + |
| E3 | 2022-10-24 | 3.11: specialising adaptive interpreter, 25% faster [^whatsnew-311] | + |
| E3 | 2023-04 | PEP 684 per-interpreter GIL accepted for 3.12 [^pep684] | + |
| E3 | 2023-07-28 | PEP 703 intent-to-accept (optional GIL) [^pep703-sc] | + |
| E4 | 2024-10-07 | 3.13: free-threaded build and JIT, both experimental [^whatsnew-313][^pep744] | + |
| E4 | 2025-02/04 | Tail-calling interpreter claims (9–15%) corrected to 3–5% after an LLVM 19 regression was found [^tailcall-apology] | − |
| E4 | 2025-05 | Microsoft cancels Faster CPython; community stewardship proposed [^reg-layoff][^stewardship] | − |
| E4 | 2025-10-07 | 3.14: free-threading supported (PEP 779), `concurrent.interpreters`, tail-call interpreter [^whatsnew-314][^pep779] | + |
| E4 | 2026-03 | "JIT back on track": trace recording, refcount elimination; contributors grow [^jit-on-track] | + |
| E4 | 2026-07-02 | PEP 836 drafted: time-boxed path to a supported JIT (target 3.17) [^pep836] | + |
| E4 | 2026-10 | 3.15 rc3; final scheduled 2026-10-09 [^pep790] | + |

# Ideas it bet on
| Idea | Outcome in CPython |
|---|---|
| [GIL removal](/ideas/concurrency/gil-removal-free-threading.md) | succeeding: supported build, not default; Phase III (default) has no PEP or date |
| [Subinterpreters](/ideas/concurrency/subinterpreters.md) | shipped (3.12 per-interpreter GIL, 3.14 stdlib module); low uptake |
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | slow but positive by 3.15 |
| [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) | CPython is its largest deployment |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | not pursued; lazy imports (PEP 810) are the startup lever in 3.15 |

# What succeeded
- **Specialisation over a rewrite.** Quickening and inline caches gave large wins without changing the C API, so the ecosystem received them for free.[^whatsnew-311]
- **Staged, reversible free-threading.** Experimental → supported → (maybe) default, with published criteria (PEP 779). This kept the C-extension ecosystem on board.[^pep779]
- **Resilience after the layoff.** The JIT team split work into small "mega-issues" and grew from 2 to 4 active middle-end contributors plus 11 occasional ones.[^jit-on-track]

# What failed or stalled
- **The 5x plan.** It reached about 1.5x in four years, not 5x. Each later stage gave single-digit gains.[^lwn-jit-2025]
- **JIT payoff.** Two releases of "the JIT exists but isn't faster". This hurt credibility until 3.15.[^whatsnew-315]
- **Benchmark hygiene.** The 3.14 tail-calling numbers were inflated by a compiler regression and had to be publicly corrected.[^tailcall-apology]
- **Funding concentration.** One company's reorganisation removed most of the paid performance team in one day.[^reg-layoff]

# By era
## E1
Governance transition after the BDFL. Performance was not a priority.
## E2
Shannon plan and Microsoft funding.
## E3
3.11's big win; PEP 684 and PEP 703.
## E4
Free-threading and JIT shipped; layoff; community-run JIT recovery; PEP 836 criteria; the ABI cleanup is deferred until free-threading becomes default.[^summit-2026]

# Lessons
- Compatibility-preserving speedups (specialisation) give the best ratio of gain to ecosystem cost.
- Publishing explicit acceptance criteria (PEP 779, PEP 836) makes risky runtime bets governable.
- Performance work paid for by one employer needs a fallback plan.

# Related
- [Python](/languages/python.md) · [PyPy](/runtimes/pypy.md) · [Cinder and Pyston](/runtimes/cinder-and-pyston.md) · [CRuby YJIT](/runtimes/cruby-yjit.md)
- [Python 3.11 Faster CPython](/events/2022-10-python-3-11-faster-cpython.md) · [PEP 703 accepted](/events/2023-07-pep-703-accepted.md) · [Python 3.13](/events/2024-10-python-3-13-free-threading-jit.md) · [Faster CPython cancelled](/events/2025-05-microsoft-cancels-faster-cpython.md) · [Python 3.14](/events/2025-10-python-3-14-free-threading-supported.md)

[^shannon-plan]: Mark Shannon: faster-cpython plan — https://github.com/markshannon/faster-cpython/blob/master/plan.md
[^lwn-making-faster]: LWN: Making CPython faster — https://lwn.net/Articles/857754/
[^whatsnew-311]: What's New in Python 3.11 — https://docs.python.org/3/whatsnew/3.11.html
[^pep684]: PEP 684 — https://peps.python.org/pep-0684/
[^pep703-sc]: Steering Council notice about PEP 703 — https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
[^pep744]: PEP 744 — https://peps.python.org/pep-0744/
[^whatsnew-313]: What's New in Python 3.13 — https://docs.python.org/3/whatsnew/3.13.html
[^whatsnew-314]: What's New in Python 3.14 — https://docs.python.org/3/whatsnew/3.14.html
[^pep779]: PEP 779 — https://peps.python.org/pep-0779/
[^tailcall-apology]: Ken Jin: I'm Sorry for Python's tail-calling Interpreter's Results — https://fidget-spinner.github.io/posts/apology-tail-call.html
[^lwn-jit-2025]: LWN: Following up on the Python JIT — https://lwn.net/Articles/1029307/
[^reg-layoff]: The Register: Microsoft's latest layoffs — https://www.theregister.com/software/2025/05/16/microsofts-latest-layoffs-hit-software-engineers-hard/1240892
[^stewardship]: Community Stewardship of Faster CPython — https://discuss.python.org/t/community-stewardship-of-faster-cpython/92153
[^jit-on-track]: Python Insider: Python 3.15's JIT is now back on track — https://blog.python.org/2026/03/jit-on-track/
[^whatsnew-315]: What's New in Python 3.15 — https://docs.python.org/3.15/whatsnew/3.15.html
[^pep836]: PEP 836 — https://peps.python.org/pep-0836/
[^pep790]: PEP 790 — https://peps.python.org/pep-0790/
[^summit-2026]: Python Insider: Lightning Talks (Language Summit 2026) — https://blog.python.org/2026/09/language-summit-2026-lightning-talks/
