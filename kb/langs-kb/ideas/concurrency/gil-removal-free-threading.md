---
type: Idea
title: GIL removal and free-threading
description: "Removing a dynamic runtime's global interpreter lock so threads run bytecode in parallel. Tried and abandoned for 25 years (the 1999 free-threading patch, Gilectomy); finally landed in CPython as an opt-in build — experimental in 3.13 (2024), officially supported in 3.14 (2025) — thanks to Sam Gross's biased reference counting and Meta's funding. Succeeding, but not yet the default; Ruby kept its GVL and chose Ractors instead."
area: concurrency
tags: [gil, gvl, free-threading, nogil, pep-703, pep-779, biased-reference-counting, python, ruby, ocaml]
outcome: succeeding
maturity_2026: adopted
origin_year: 1999
mainstream_year: 2025
languages: [languages/python, languages/ruby, languages/ocaml]
runtimes: [runtimes/cpython, runtimes/cruby-yjit, runtimes/ocaml-5-runtime, runtimes/pypy]
related_ideas: [ideas/concurrency/subinterpreters, ideas/concurrency/data-race-safety-in-types, ideas/concurrency/multicore-ocaml-and-effects-based-concurrency, ideas/runtime-performance/jit-for-dynamic-languages]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pep703
    resource: https://peps.python.org/pep-0703/
    title: "PEP 703: Making the Global Interpreter Lock Optional in CPython (Sam Gross)"
  - id: pep703-sc
    resource: https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
    title: "Python Steering Council: notice about PEP 703 (2023-07-28)"
  - id: whatsnew-313
    resource: https://docs.python.org/3/whatsnew/3.13.html
    title: "What's New in Python 3.13 (experimental free-threaded build)"
    author: org:python-software-foundation
  - id: pep779
    resource: https://peps.python.org/pep-0779/
    title: "PEP 779: Criteria for supported status for free-threaded Python (accepted June 2025)"
  - id: whatsnew-314
    resource: https://docs.python.org/3/whatsnew/3.14.html
    title: "What's New in Python 3.14"
    author: org:python-software-foundation
  - id: ft-howto
    resource: https://docs.python.org/3/howto/free-threading-python.html
    title: "Python docs: Python support for free threading"
    author: org:python-software-foundation
  - id: summit-2025-ft
    resource: https://pyfound.blogspot.com/2025/06/python-language-summit-2025-state-of-free-threaded-python.html
    title: "PSF: The Python Language Summit 2025 — State of Free-Threaded Python"
    author: org:python-software-foundation
  - id: quansight-halfway
    resource: https://labs.quansight.org/blog/free-threaded-python-halfway
    title: "Quansight Labs: Halfway on the path to community support for free-threaded Python (180 of 360 tracked packages ship free-threaded wheels, Feb 2026)"
  - id: cython-ft
    resource: https://cython.readthedocs.io/en/latest/src/userguide/freethreading.html
    title: "Cython docs: Free threading (freethreading_compatible directive)"
  - id: summit-2026
    resource: https://blog.python.org/2026/09/language-summit-2026-lightning-talks/
    title: "Python Insider: Lightning Talks (Python Language Summit 2026) — ABI changes deferred until free-threading is default"
    author: org:python-software-foundation
  - id: ruby-40
    resource: https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
    title: "Ruby 4.0.0 Released (Ractor improvements; GVL retained)"
    author: org:ruby-lang
  - id: lwn-nogil
    resource: https://lwn.net/Articles/872869/
    title: "LWN: A viable solution for Python concurrency (2021-10-14)"
  - id: ocaml5-event
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here (Dec 2022)"
---

# Summary
**Verdict: succeeding, after 25 years of failure.** The GIL was Python's best-known limitation. Attempts to remove it failed repeatedly because they made single-threaded code much slower and broke C extensions. Sam Gross (Meta) solved both problems well enough with PEP 703. It uses biased reference counting, immortal objects, mimalloc and per-object locks, with an initial single-thread penalty of roughly 5–10%.[^pep703]

The rollout was explicitly staged:
1. The Steering Council stated its intent to accept in July 2023, with a promise to roll back if the ecosystem cost was too high.[^pep703-sc]
2. An experimental `python3.13t` build shipped in October 2024.[^whatsnew-313]
3. PEP 779 (June 2025) set criteria for "supported" status: at most 15% CPU and 20% memory overhead. 3.14 met them.[^pep779][^whatsnew-314]

By February 2026, 180 of the 360 most-downloaded packages with native code shipped free-threaded wheels.[^quansight-halfway] **Phase III**, making free-threading the default build, has no PEP and no date.[^ft-howto][^summit-2026]

Other languages chose differently. **OCaml 5** (Dec 2022) removed its runtime lock entirely in one major release.[^ocaml5-event] **Ruby** kept its GVL and invested in Ractors, isolated actor-like units, which remained experimental through Ruby 4.0.[^ruby-40]

# The idea
A GIL serialises bytecode execution so the interpreter's internals (reference counts, dicts, allocator) need no fine-grained locking. It makes single-threaded code fast and C extensions simple, and it makes CPU-bound threads useless. Prior art: Greg Stein's 1999 free-threading patch, Larry Hastings' Gilectomy (2016), Jython and IronPython (no GIL, on the JVM and CLR), and PyPy's STM experiment. All failed on single-thread cost or compatibility. Gross's insight was a combination: most objects are only touched by the thread that created them (biased refcounting), and the hottest shared objects can be made immortal.[^pep703]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-10 | Sam Gross publishes the "nogil" proof of concept: 18–20x on 20 threads, faster single-thread than 3.9 thanks to bundled optimisations [^lwn-nogil] | + |
| E3 | 2022-12 | OCaml 5.0 ships without a runtime lock [^ocaml5-event] | + |
| E3 | 2023-07-28 | Python SC announces intent to accept PEP 703 [^pep703-sc] | + |
| E4 | 2024-10-07 | Python 3.13 free-threaded build (experimental) [^whatsnew-313] | + |
| E4 | 2025-05 | Language Summit: state of free-threaded Python; library porting push [^summit-2025-ft] | + |
| E4 | 2025-06 | PEP 779 accepted: supported status criteria [^pep779] | + |
| E4 | 2025-10-07 | Python 3.14: free-threaded build officially supported [^whatsnew-314] | + |
| E4 | 2026-02 | About 50% of top native packages ship free-threaded wheels [^quansight-halfway] | + |
| E4 | 2026-09 | Summit: ABI cleanup deferred until free-threading becomes default [^summit-2026] | flat |

# Where it succeeded
- **CPython.** A production-quality free-threaded build with an acceptable single-thread cost, shipped without forking the language.[^pep779]
- **Ecosystem porting.** Cython added a `freethreading_compatible` directive, and the largest native libraries (NumPy and the scientific stack) shipped `cp313t`/`cp314t` wheels.[^cython-ft][^quansight-halfway]
- **OCaml.** Proof that a mature language can switch to parallel execution in one release.[^ocaml5-event]

# Where it failed or stalled
- **Not the default.** Two builds and two wheel tags create permanent friction until Phase III, which has no schedule.[^ft-howto]
- **The long tail.** Half of the top native packages still lacked free-threaded wheels in early 2026. Any one of them in a dependency tree forces the GIL back on (the interpreter re-enables it on import).[^quansight-halfway]
- **Ruby.** No GVL removal is planned. Ractor is an alternative that most gems do not support.[^ruby-40]

# Why
- **Hardware and AI demand.** Many-core machines and data-loading and inference pipelines made the GIL's cost visible to the users with the most money (Meta, Microsoft, NVIDIA, Quansight-funded library maintainers).
- **A design that kept single-thread cost low.** Previous attempts were rejected for 30–50% slowdowns. PEP 703 reached 5–10%.[^pep703][^pep779]
- **A governance device.** "Experimental → supported → default, with an exit" let the Steering Council accept the risk incrementally.[^pep703-sc]
- **Funding.** Meta paid for the core work and much of the porting. Quansight and others were paid to port the scientific stack.[^summit-2025-ft]
- **Why Ruby differs.** Ruby's ecosystem relies even more on global mutable state (Rails autoloading, class-level caches). Matz prioritised compatibility, and Ruby had no corporate sponsor for GVL removal comparable to Meta. Shopify's priorities were the JIT and memory.

# Lessons
- Long-dead runtime ideas can come back when the cost model changes and someone funds a design that respects compatibility.
- Ship incompatible runtime modes as a separate opt-in build with published criteria for promotion.
- The last 50% of ecosystem porting takes longer than the first.

# Related
- [Subinterpreters](/ideas/concurrency/subinterpreters.md) · [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) · [Multicore OCaml](/ideas/concurrency/multicore-ocaml-and-effects-based-concurrency.md)
- [CPython](/runtimes/cpython.md) · [Python](/languages/python.md) · [Ruby](/languages/ruby.md)
- [PEP 703 accepted](/events/2023-07-pep-703-accepted.md) · [Python 3.13](/events/2024-10-python-3-13-free-threading-jit.md) · [Python 3.14](/events/2025-10-python-3-14-free-threading-supported.md) · [OCaml 5](/events/2022-12-ocaml-5-multicore-effects.md)

[^pep703]: PEP 703 — https://peps.python.org/pep-0703/
[^pep703-sc]: Python Steering Council notice about PEP 703 — https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
[^whatsnew-313]: What's New in Python 3.13 — https://docs.python.org/3/whatsnew/3.13.html
[^pep779]: PEP 779 — https://peps.python.org/pep-0779/
[^whatsnew-314]: What's New in Python 3.14 — https://docs.python.org/3/whatsnew/3.14.html
[^ft-howto]: Python docs: Python support for free threading — https://docs.python.org/3/howto/free-threading-python.html
[^summit-2025-ft]: PSF: Language Summit 2025 — State of Free-Threaded Python — https://pyfound.blogspot.com/2025/06/python-language-summit-2025-state-of-free-threaded-python.html
[^quansight-halfway]: Quansight Labs: Halfway on the path to community support for free-threaded Python — https://labs.quansight.org/blog/free-threaded-python-halfway
[^cython-ft]: Cython docs: Free threading — https://cython.readthedocs.io/en/latest/src/userguide/freethreading.html
[^summit-2026]: Python Insider: Lightning Talks (Language Summit 2026) — https://blog.python.org/2026/09/language-summit-2026-lightning-talks/
[^ruby-40]: Ruby 4.0.0 Released — https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
[^ocaml5-event]: Tarides: OCaml 5 with Multicore Support is Here — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^lwn-nogil]: LWN: A viable solution for Python concurrency — https://lwn.net/Articles/872869/
