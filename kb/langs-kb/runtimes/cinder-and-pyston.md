---
type: Runtime
title: Cinder and Pyston (performance forks of CPython)
description: "Two 2020–2021 attempts to make Python fast by forking CPython. Pyston (Dropbox alumni, then Anaconda) went closed-source, reopened, pivoted to an extension module and was abandoned by 2023. Cinder (Instagram/Meta) survived by upstreaming ideas such as immortal objects and turning its JIT into a pip-installable extension, CinderX, which supports stock CPython 3.14. Forks lose; upstreaming and extensions win."
tags: [cinder, cinderx, pyston, pyston-lite, python, jit, fork, meta, instagram, anaconda, static-python]
runtime_kind: jit
languages: [languages/python]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/types/python-superset-languages, ideas/concurrency/gil-removal-free-threading]
trajectory: niche
steward: Meta (Cinder/CinderX); Pyston — unmaintained
governance: single-vendor
era_momentum: { E1: n/a, E2: up, E3: down, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pyston-v2
    resource: https://blog.pyston.org/2020/10/28/pyston-v2-20-faster-python/
    title: "Pyston blog: Pyston v2 — 20% faster Python (2020-10-28, closed source)"
  - id: pyston-v22
    resource: https://blog.pyston.org/2021/05/05/pyston-v2-2-faster-and-open-source/
    title: "Pyston blog: Pyston v2.2 — faster and open source (2021-05-05)"
  - id: pyston-anaconda
    resource: https://www.anaconda.com/blog/pyston-team-joins-anaconda
    title: "Anaconda: Pyston team joins Anaconda (Aug 2021)"
    author: org:anaconda
  - id: pyston-blog
    resource: https://blog.pyston.org/
    title: "The Pyston Blog (2022-09-29 post: focus on Pyston-lite, leaving Anaconda)"
  - id: pyston-gh
    resource: https://github.com/pyston/pyston
    title: "GitHub: pyston/pyston — (No longer maintained)"
  - id: cinder-willison
    resource: https://simonwillison.net/2021/May/4/cinder-instagrams-performance-oriented-fork-of-cpython/
    title: "Simon Willison: Cinder — Instagram's performance-oriented fork of CPython (May 2021)"
  - id: cinder-inliner
    resource: https://engineering.fb.com/2022/05/02/open-source/cinder-jits-instagram/
    title: "Engineering at Meta: How the Cinder JIT's function inliner helps us optimize Instagram (2022)"
    author: org:meta
  - id: cinderx-gh
    resource: https://github.com/facebookincubator/cinderx
    title: "GitHub: facebookincubator/cinderx — High-performance Python runtime extensions"
    author: org:meta
  - id: cinderx-pypi
    resource: https://pypi.org/project/cinderx/
    title: "PyPI: cinderx (weekly releases; 3.14 is first stock CPython supported)"
  - id: pep683
    resource: https://peps.python.org/pep-0683/
    title: "PEP 683: Immortal Objects, Using a Fixed Refcount (Python 3.12)"
  - id: reg-quest
    resource: https://www.theregister.com/2021/05/06/the_quest_for_faster_python/
    title: "The Register: The quest for faster Python (May 2021)"
  - id: summit-2021-ig
    resource: https://pyfound.blogspot.com/2021/05/the-2021-python-language-summit-cpython.html
    title: "PSF: 2021 Language Summit — CPython Performance Improvements at Instagram"
    author: org:python-software-foundation
---

# Summary
In 2020–2021 three groups tried to make Python faster at the same time: Microsoft (Faster CPython, upstream), Pyston (a fork) and Instagram's Cinder (a fork). The results are a clean natural experiment:

**Pyston failed as a product.**
- v2 shipped on 2020-10-28 as *closed source*, claiming 20% over CPython 3.8.[^pyston-v2]
- It reopened as open source in v2.2 (2021-05-05, about 30% faster on web benchmarks).[^pyston-v22]
- Anaconda hired its two lead developers in August 2021.[^pyston-anaconda]
- On 2022-09-29 the team said Pyston-lite (a JIT extension module) had 100x more downloads per day than full Pyston. They made it the core product and both left Anaconda.[^pyston-blog]
- The repository is now marked "No longer maintained".[^pyston-gh]

**Cinder survived by changing shape.**
- Meta open-sourced Instagram's CPython 3.8 fork in May 2021. It included a method JIT, "shadowcode" inline caching, Static Python and strict modules.[^cinder-willison][^summit-2021-ig]
- Its ideas went upstream. The most visible is immortal objects (PEP 683, Python 3.12).[^pep683]
- The JIT became **CinderX**, an extension released to PyPI weekly. Python 3.14 is the first *stock* CPython it supports. It still runs Instagram's Django service.[^cinderx-gh][^cinderx-pypi]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-10-28 | Pyston v2 released closed-source (+20%) [^pyston-v2] | mixed |
| E2 | 2021-05 | Cinder open-sourced; Pyston v2.2 goes open source (+30%) [^cinder-willison][^pyston-v22][^reg-quest] | + |
| E2 | 2021-08 | Anaconda hires Pyston's developers [^pyston-anaconda] | + |
| E2 | 2022-05 | Meta details Cinder JIT inliner gains at Instagram [^cinder-inliner] | + |
| E2 | 2022-09-29 | Pyston pivots to Pyston-lite; team leaves Anaconda [^pyston-blog] | − |
| E3 | 2023-10 | Python 3.12 ships PEP 683 immortal objects (from Meta's work) [^pep683] | + |
| E4 | 2025–2026 | CinderX ships weekly to PyPI; supports stock CPython 3.14 [^cinderx-pypi] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | Cinder's method JIT works in production at Meta; Pyston's JIT abandoned |
| [Python superset/subset languages](/ideas/types/python-superset-languages.md) | Static Python (type-driven bytecode) lives on in CinderX |
| [GIL removal](/ideas/concurrency/gil-removal-free-threading.md) | Meta's parallel bet (Sam Gross, PEP 703) went upstream, not into Cinder |

# What succeeded
- **Upstreaming.** Pyston estimated its 30% as 10% kept in Pyston-lite, 10% independently done by CPython, and 10% to contribute upstream. That shows how much the fork's advantage shrank once upstream started moving.[^pyston-blog] Meta took its most valuable runtime idea (immortal objects) upstream.[^pep683]
- **Extension, not fork.** CinderX and Pyston-lite both proved that users install a pip package far more readily than a different interpreter.[^pyston-blog][^cinderx-gh]

# What failed or stalled
- **The closed-source launch.** Pyston v2's business-model experiment cost months of goodwill and was reversed within seven months.[^pyston-v22]
- **Maintaining a fork.** Rebasing a performance fork onto each CPython release while Faster CPython changed the same internals proved unsustainable for a two-person team.[^pyston-blog]
- **Funding.** Anaconda's sponsorship lasted about a year. Without a large internal user like Meta's Instagram, a performance fork has no lasting backer.

# By era
## E2
Both projects launch and open-source. Pyston gets a sponsor, then pivots.
## E3
Meta upstreams immortal objects; Pyston becomes inactive.
## E4
CinderX as a supported extension for stock CPython 3.14.

# Lessons
- Forking a reference runtime is a losing game once upstream invests in performance. Contribute upstream or ship as an extension.
- Adoption follows installation friction more than raw speedup (Pyston-lite's 100x download ratio).[^pyston-blog]

# Related
- [CPython](/runtimes/cpython.md) · [PyPy](/runtimes/pypy.md) · [Python](/languages/python.md)
- [Pyston scales back](/events/2022-09-pyston-scales-back.md)

[^pyston-v2]: Pyston blog: Pyston v2 — 20% faster Python — https://blog.pyston.org/2020/10/28/pyston-v2-20-faster-python/
[^pyston-v22]: Pyston blog: Pyston v2.2 — faster and open source — https://blog.pyston.org/2021/05/05/pyston-v2-2-faster-and-open-source/
[^pyston-anaconda]: Anaconda: Pyston team joins Anaconda — https://www.anaconda.com/blog/pyston-team-joins-anaconda
[^pyston-blog]: The Pyston Blog — https://blog.pyston.org/
[^pyston-gh]: GitHub: pyston/pyston — https://github.com/pyston/pyston
[^cinder-willison]: Simon Willison: Cinder — https://simonwillison.net/2021/May/4/cinder-instagrams-performance-oriented-fork-of-cpython/
[^cinder-inliner]: Engineering at Meta: Cinder JIT's function inliner — https://engineering.fb.com/2022/05/02/open-source/cinder-jits-instagram/
[^cinderx-gh]: GitHub: facebookincubator/cinderx — https://github.com/facebookincubator/cinderx
[^cinderx-pypi]: PyPI: cinderx — https://pypi.org/project/cinderx/
[^pep683]: PEP 683: Immortal Objects — https://peps.python.org/pep-0683/
[^reg-quest]: The Register: The quest for faster Python — https://www.theregister.com/2021/05/06/the_quest_for_faster_python/
[^summit-2021-ig]: PSF: 2021 Language Summit — CPython Performance Improvements at Instagram — https://pyfound.blogspot.com/2021/05/the-2021-python-language-summit-cpython.html
