---
type: Runtime
title: PyPy
description: "PyPy's meta-tracing JIT is still often several times faster than CPython on pure-Python code. Between 2018 and 2026 it fell further behind CPython's versions: 3.11 support arrived in 2025 and 3.12 (beta) only in September 2026. It runs on volunteers and donations. Proof that a faster compatible implementation is not enough when the C-extension ecosystem and the reference interpreter keep moving."
tags: [pypy, python, tracing-jit, meta-tracing, rpython, alternative-implementation]
runtime_kind: jit
languages: [languages/python]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/concurrency/gil-removal-free-threading]
trajectory: declining
steward: PyPy project (volunteers; Software Freedom Conservancy-hosted donations)
governance: community
era_momentum: { E1: flat, E2: flat, E3: down, E4: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pypy-311-update
    resource: https://pypy.org/posts/2025/01/towards-pypy311-an-update.html
    title: "PyPy blog: Towards PyPy3.11 — an update (Jan 2025)"
    author: org:pypy
  - id: pypy-7320
    resource: https://pypy.org/posts/2025/07/pypy-v7320-release.html
    title: "PyPy v7.3.20 release (2025-07-04; 3.11 final, 3.10 dropped)"
    author: org:pypy
  - id: pypy-312-disc
    resource: https://github.com/orgs/pypy/discussions/5145
    title: "PyPy discussion #5145: Python 3.12 support ('no timelines, volunteer-run')"
    author: org:pypy
  - id: hn-unmaintained
    resource: https://news.ycombinator.com/item?id=47293415
    title: "Hacker News: 'Warn about PyPy being unmaintained' (uv PR) with responses from PyPy core devs (2026)"
  - id: pypy-800
    resource: https://pypy.org/posts/2026/09/pypy-v800-release.html
    title: "PyPy v8.0.0 release (2026-09-19; 3.12 beta, cp312-abi3 support)"
    author: org:pypy
  - id: pypy-7322
    resource: https://pypy.org/posts/2026/04/pypy-v7322-release.html
    title: "PyPy v7.3.22 release (April 2026)"
    author: org:pypy
  - id: whatsnew-313
    resource: https://docs.python.org/3/whatsnew/3.13.html
    title: "What's New in Python 3.13 (new REPL based on PyPy's)"
    author: org:python-software-foundation
  - id: reg-quest
    resource: https://www.theregister.com/2021/05/06/the_quest_for_faster_python/
    title: "The Register: The quest for faster Python — Pyston, Cinder, or should devs just use PyPy? (May 2021)"
---

# Summary
PyPy is the **technically successful, strategically stranded** Python runtime. Its RPython meta-tracing JIT has been production-quality for over a decade. Between 2018 and 2026 its problem was not speed but keeping up. CPython shipped a new version every year, while PyPy's small volunteer team lagged by two to three versions:
- **3.11** reached beta in February 2025 and became final with 7.3.20 (2025-07-04). It happened only because a volunteer did about 80% of the work. The team had essentially decided to stop at 3.10.[^pypy-311-update][^pypy-7320][^pypy-312-disc]
- **3.12** arrived as beta in PyPy 8.0.0 on 2026-09-19, while CPython was releasing 3.15. 8.0.0 also redesigned the object layout to load CPython 3.12 `abi3` wheels.[^pypy-800]

In 2026, Astral's uv proposed warning users that PyPy is "unmaintained". Core developer Carl Friedrich Bolz-Tereick replied that PyPy is maintained and its JIT still improves, but "the remaining core devs don't have the capacity to keep up with cpython".[^hn-unmaintained]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-05 | Press frames PyPy as the existing answer to "faster Python" while Pyston and Cinder relaunch [^reg-quest] | mixed |
| E4 | 2024-10-07 | CPython 3.13's new REPL is based on PyPy's [^whatsnew-313] | + |
| E4 | 2025-01 | "Towards PyPy3.11" — volunteer-driven 3.11 port [^pypy-311-update] | mixed |
| E4 | 2025-07-04 | 7.3.20: PyPy3.11 final; 3.10 dropped [^pypy-7320] | + |
| E4 | 2026 | uv PR to flag PyPy as unmaintained; core devs dispute it [^hn-unmaintained] | − |
| E4 | 2026-04 | 7.3.22: JIT bug fixes (2.7 and 3.11) [^pypy-7322] | flat |
| E4 | 2026-09-19 | 8.0.0: PyPy3.12 beta, cp312-abi3 wheel compatibility, last 3.11 release [^pypy-800] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | technically succeeded; adoption failed |
| [GIL removal](/ideas/concurrency/gil-removal-free-threading.md) | PyPy's STM experiment was abandoned years ago; it still has a GIL |

# What succeeded
- **Pure-Python speed.** The meta-tracing JIT remains a reference design and a frequent research baseline.
- **Influence on CPython.** Ideas and code moved upstream; the 3.13 REPL is the visible example.[^whatsnew-313]
- **Compatibility engineering.** The 8.0 `abi3` work makes CPython's binary wheels usable, which addresses the biggest historical blocker.[^pypy-800]

# What failed or stalled
- **Version lag.** Being two or three CPython versions behind excludes PyPy from projects that track current Python.[^pypy-312-disc]
- **C extensions.** NumPy-, pandas- and PyTorch-heavy code spends its time in C, where a Python JIT cannot help and the cpyext emulation layer adds cost. HPy, the portable C-API effort, was removed from default builds in 8.0.[^pypy-800]
- **Funding.** There is no corporate patron comparable to Microsoft (Faster CPython), Meta (free-threading, Cinder) or Shopify (YJIT).[^pypy-312-disc]

# By era
## E1
3.6 support. Stable but niche.
## E2
3.7–3.9 catch-up. Competing "faster Python" projects (Pyston, Cinder) relaunch.
## E3
3.10. Faster CPython narrows the gap on typical code.
## E4
Volunteer 3.11, the "unmaintained" debate, 8.0 with 3.12 beta.

# Lessons
- An alternative runtime must match the reference implementation's release cadence and its C ABI, not only its semantics.
- When the reference interpreter gets 50% faster, the case for switching runtimes weakens for everyone except CPU-bound pure-Python users.

# Related
- [CPython](/runtimes/cpython.md) · [Cinder and Pyston](/runtimes/cinder-and-pyston.md) · [GraalVM](/runtimes/graalvm.md) · [TruffleRuby](/runtimes/truffleruby.md)

[^pypy-311-update]: PyPy blog: Towards PyPy3.11 — https://pypy.org/posts/2025/01/towards-pypy311-an-update.html
[^pypy-7320]: PyPy v7.3.20 release — https://pypy.org/posts/2025/07/pypy-v7320-release.html
[^pypy-312-disc]: PyPy discussion #5145 — https://github.com/orgs/pypy/discussions/5145
[^hn-unmaintained]: Hacker News: Warn about PyPy being unmaintained — https://news.ycombinator.com/item?id=47293415
[^pypy-800]: PyPy v8.0.0 release — https://pypy.org/posts/2026/09/pypy-v800-release.html
[^pypy-7322]: PyPy v7.3.22 release — https://pypy.org/posts/2026/04/pypy-v7322-release.html
[^whatsnew-313]: What's New in Python 3.13 — https://docs.python.org/3/whatsnew/3.13.html
[^reg-quest]: The Register: The quest for faster Python — https://www.theregister.com/2021/05/06/the_quest_for_faster_python/
