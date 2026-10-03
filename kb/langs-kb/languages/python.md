---
type: Language
title: Python
description: "The dynamic language that won 2018–2026. AI and data science made it the most-used language on GitHub (2024) and the TIOBE leader. Its runtime finally started to catch up: Faster CPython (+~50% in four releases), optional free-threading (supported in 3.14), and a JIT that only became clearly useful in 3.15. Packaging was rebuilt around Rust-written tools (uv). The weak spots were corporate-dependent performance work and slow ecosystem uptake of no-GIL."
tags: [python, dynamic, scripting, data-science, ai, free-threading, gradual-typing, packaging]
paradigms: [multi-paradigm, object-oriented, imperative, functional]
typing: gradual
memory_model: rc
first_released: 1991
steward: Python Software Foundation / Python Steering Council
governance: foundation
trajectory: growing
ideas: [ideas/concurrency/gil-removal-free-threading, ideas/concurrency/subinterpreters, ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/copy-and-patch-jit, ideas/types/gradual-typing-for-dynamic-languages, ideas/types/python-superset-languages, ideas/tooling-and-ecosystem/packaging-revolution-python, ideas/types/sum-types-and-pattern-matching]
runtimes: [runtimes/cpython, runtimes/pypy, runtimes/cinder-and-pyston, runtimes/graalvm]
adoption_signals:
  tiobe_rank: { value: 1, as_of: 2026-09 }
  tiobe_rating_pct: { value: 17.76, as_of: 2026-09 }
  so_survey_usage_pct: { value: 57.9, as_of: 2025 }
  github_octoverse_rank: { value: 1, as_of: 2024 }
  typed_python_survey_regular_hint_use_pct: { value: 86, as_of: 2025 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: techrep-tiobe-2026-09
    resource: https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
    title: "TechRepublic: TIOBE Index for September 2026"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: so-2025-press
    resource: https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/
    title: "Stack Overflow press release: 2025 Developer Survey (Python +7 points)"
    author: org:stack-overflow
  - id: octoverse-2024
    resource: https://github.blog/news-insights/octoverse/octoverse-2024/
    title: "GitHub Octoverse 2024: AI leads Python to top language"
    author: org:github
  - id: py2-sunset
    resource: https://www.python.org/doc/sunset-python-2/
    title: "Python.org: Sunsetting Python 2"
    author: org:python-software-foundation
  - id: whatsnew-311
    resource: https://docs.python.org/3/whatsnew/3.11.html
    title: "What's New in Python 3.11 (25% faster than 3.10)"
    author: org:python-software-foundation
  - id: lwn-jit-2025
    resource: https://lwn.net/Articles/1029307/
    title: "LWN: Following up on the Python JIT (July 2025)"
  - id: whatsnew-313
    resource: https://docs.python.org/3/whatsnew/3.13.html
    title: "What's New in Python 3.13"
    author: org:python-software-foundation
  - id: whatsnew-314
    resource: https://docs.python.org/3/whatsnew/3.14.html
    title: "What's New in Python 3.14"
    author: org:python-software-foundation
  - id: whatsnew-315
    resource: https://docs.python.org/3.15/whatsnew/3.15.html
    title: "What's New in Python 3.15 (rc3 documentation)"
    author: org:python-software-foundation
  - id: pep779
    resource: https://peps.python.org/pep-0779/
    title: "PEP 779: Criteria for supported status for free-threaded Python"
  - id: pep810
    resource: https://peps.python.org/pep-0810/
    title: "PEP 810: Explicit lazy imports"
  - id: pep790
    resource: https://peps.python.org/pep-0790/
    title: "PEP 790: Python 3.15 Release Schedule"
  - id: reg-fcpy-layoff
    resource: https://www.theregister.com/software/2025/05/16/microsofts-latest-layoffs-hit-software-engineers-hard/1240892
    title: "The Register: Microsoft's latest layoffs hit software engineers hard (Faster CPython)"
  - id: typing-survey-2025
    resource: https://engineering.fb.com/2025/12/22/developer-tools/python-typing-survey-2025-code-quality-flexibility-typing-adoption/
    title: "Engineering at Meta: Python Typing Survey 2025"
    author: org:meta
  - id: astral-uv
    resource: https://astral.sh/blog/uv
    title: "Astral: uv — Python packaging in Rust (Feb 2024)"
    author: org:astral
  - id: willison-openai-astral
    resource: https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
    title: "Simon Willison: Thoughts on OpenAI acquiring Astral and uv/ruff/ty (2026-03-19)"
  - id: pep703-sc
    resource: https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
    title: "Python Steering Council notice about PEP 703 (2023-07-28)"
---

# Summary
Python is the clearest **winner** among dynamic languages in 2018–2026. It also gained the most of any language from the AI boom. In 2024 it overtook JavaScript as the most-used language on GitHub, the first change at the top in a decade.[^octoverse-2024] In 2025, 57.9% of Stack Overflow respondents used it, up 7 points in a single year.[^so-2025][^so-2025-press] It held #1 on TIOBE at 17.76% in September 2026, though that rating had been falling through 2026.[^tiobe-2026-09][^techrep-tiobe-2026-09]

The language and runtime changed more in these eight years than in the previous fifteen:
- **Performance.** Python 3.11 was 25% faster than 3.10, and 3.11→3.14 added up to roughly 50%.[^whatsnew-311][^lwn-jit-2025]
- **Free-threading.** The GIL became optional (PEP 703, 2023) and officially supported in 3.14 (PEP 779, 2025).[^pep703-sc][^pep779]
- **JIT.** A copy-and-patch JIT was experimental in 3.13. Only in 3.15 did it give a clear 5–13% speedup.[^whatsnew-313][^whatsnew-315]
- **Typing.** 86% of surveyed developers use type hints regularly.[^typing-survey-2025]
- **Packaging.** Astral's Rust-written `uv` took over packaging from 2024.[^astral-uv]

The failures were institutional more than technical. Microsoft cancelled the Faster CPython team in May 2025, halfway through its plan.[^reg-fcpy-layoff] The most important new tooling (uv, Ruff, ty) ended up owned by OpenAI in 2026.[^willison-openai-astral]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-01-01 | Python 2 reaches end of life; 2.7.18 final in April 2020 [^py2-sunset] | + |
| E2 | 2021-05 | Microsoft-funded Faster CPython project made public (Guido van Rossum, Mark Shannon) [^lwn-jit-2025] | + |
| E3 | 2022-10-24 | Python 3.11: specializing adaptive interpreter, 25% faster [^whatsnew-311] | + |
| E3 | 2023-07-28 | Steering Council announces intent to accept PEP 703 (optional GIL) [^pep703-sc] | + |
| E3 | 2024-02-15 | Astral releases uv [^astral-uv] | + |
| E4 | 2024-10-07 | Python 3.13: experimental free-threaded build, experimental JIT, new REPL [^whatsnew-313] | + |
| E4 | 2024-10-30 | Octoverse: Python passes JavaScript as most-used language on GitHub [^octoverse-2024] | + |
| E4 | 2025-05 | Microsoft cancels Faster CPython; most of the team laid off [^reg-fcpy-layoff] | − |
| E4 | 2025-10-07 | Python 3.14: free-threading supported, PEP 649 lazy annotations, subinterpreters in stdlib [^whatsnew-314] | + |
| E4 | 2026-03-19 | OpenAI agrees to acquire Astral (uv, Ruff, ty) [^willison-openai-astral] | mixed |
| E4 | 2026-10 | 3.15 rc3 out; final postponed to 2026-10-09; JIT 5–13% faster, PEP 810 lazy imports [^pep790][^whatsnew-315][^pep810] | + |

# Ideas it bet on
| Idea | Outcome for Python |
|---|---|
| [GIL removal / free-threading](/ideas/concurrency/gil-removal-free-threading.md) | succeeding: supported in 3.14, not default; about half of top native packages ship wheels |
| [Subinterpreters](/ideas/concurrency/subinterpreters.md) | mixed: landed in 3.12 and 3.14 stdlib, overshadowed by free-threading |
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | slow: years of ~0% gains, real but modest gains in 3.15 |
| [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) | adopted as CPython's JIT technique; verdict pending |
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) | succeeded: mainstream, with a new generation of Rust checkers |
| [Python-superset languages](/ideas/types/python-superset-languages.md) | mixed: Cython/mypyc useful; Mojo dropped the superset goal |
| [Packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md) | succeeded: standards (PEP 621/723/751) plus uv |
| [Pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | adopted in 3.10 (PEP 634); used, though not transformative |

# What succeeded
- **Ecosystem gravity from AI.** PyTorch, Jupyter and LLM SDKs made Python the default for AI work. Octoverse 2024 credits generative-AI activity directly for Python taking first place.[^octoverse-2024]
- **Incremental, compatible speedups.** After the Python 3 transition, the core team avoided breaking changes. 3.11–3.14 delivered about 50% through interpreter specialization, with no new semantics.[^lwn-jit-2025]
- **Optional GIL with a staged rollout.** PEP 703 was accepted with an explicit opt-out: the Steering Council could reverse it if the ecosystem cost was too high. That made it politically possible.[^pep703-sc][^pep779]
- **Typing as an optional layer.** Type hints became a norm (86% use them regularly) while staying optional at runtime.[^typing-survey-2025]

# What failed or stalled
- **Corporate funding for performance.** The Shannon plan targeted 5x in four years. It delivered about 1.5x before Microsoft cut the team in May 2025, and the work moved to community stewardship.[^reg-fcpy-layoff][^lwn-jit-2025]
- **The JIT's early returns.** In 3.13 and 3.14 the JIT gave roughly 0–1% speedups. It only became clearly worth enabling in 3.15.[^whatsnew-315]
- **Free-threading uptake.** It remains a separate build (`python3.14t`). Making it the default has no PEP and no date.[^pep779]
- **Packaging fragmentation before uv.** pip, Poetry, PDM, conda and others co-existed for years. A standard lock file (PEP 751) only arrived in 2025.

# By era
## E1
Python 2 end of life (2020-01-01) closed the decade-long 2→3 migration.[^py2-sunset] Guido van Rossum had stepped down as BDFL in 2018, and the Steering Council governance model began in 2019.
## E2
Faster CPython launched with Microsoft funding. Pattern matching (3.10) arrived. Data science and machine learning kept Python growing.
## E3
3.11 delivered the big speedup. PEP 703 was accepted and uv was released. ChatGPT-era tooling (SDKs, notebooks, agents) defaulted to Python.
## E4
Free-threading and the JIT shipped (3.13 experimental, 3.14 supported). Python took the top spot on GitHub. Microsoft cut the Faster CPython team, and OpenAI bought Astral. 3.15 brings lazy imports and a JIT that is finally useful.[^whatsnew-315][^pep810]

# Lessons
- In a mature ecosystem, compatibility beats raw speed. Python got about 1.5x without breaking C extensions. Pyston and PyPy offered more speed and gained almost no adoption.
- Ecosystem pull (AI) matters far more than language design to adoption.
- When one employer funds the core performance work, that work is fragile. Without it, progress depends on whoever else keeps paying.

# Related
- [CPython](/runtimes/cpython.md) · [PyPy](/runtimes/pypy.md) · [Cinder and Pyston](/runtimes/cinder-and-pyston.md)
- [Mojo](/languages/mojo.md) · [Julia](/languages/julia.md) · [R](/languages/r.md)
- [Microsoft cancels Faster CPython](/events/2025-05-microsoft-cancels-faster-cpython.md)
- [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)

[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^techrep-tiobe-2026-09]: TechRepublic: TIOBE Index for September 2026 — https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^so-2025-press]: Stack Overflow press release: 2025 Developer Survey — https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/
[^octoverse-2024]: GitHub Octoverse 2024 — https://github.blog/news-insights/octoverse/octoverse-2024/
[^py2-sunset]: Python.org: Sunsetting Python 2 — https://www.python.org/doc/sunset-python-2/
[^whatsnew-311]: What's New in Python 3.11 — https://docs.python.org/3/whatsnew/3.11.html
[^lwn-jit-2025]: LWN: Following up on the Python JIT — https://lwn.net/Articles/1029307/
[^whatsnew-313]: What's New in Python 3.13 — https://docs.python.org/3/whatsnew/3.13.html
[^whatsnew-314]: What's New in Python 3.14 — https://docs.python.org/3/whatsnew/3.14.html
[^whatsnew-315]: What's New in Python 3.15 — https://docs.python.org/3.15/whatsnew/3.15.html
[^pep779]: PEP 779 — https://peps.python.org/pep-0779/
[^pep810]: PEP 810 — https://peps.python.org/pep-0810/
[^pep790]: PEP 790: Python 3.15 Release Schedule — https://peps.python.org/pep-0790/
[^reg-fcpy-layoff]: The Register: Microsoft's latest layoffs hit software engineers hard — https://www.theregister.com/software/2025/05/16/microsofts-latest-layoffs-hit-software-engineers-hard/1240892
[^typing-survey-2025]: Engineering at Meta: Python Typing Survey 2025 — https://engineering.fb.com/2025/12/22/developer-tools/python-typing-survey-2025-code-quality-flexibility-typing-adoption/
[^astral-uv]: Astral: uv — Python packaging in Rust — https://astral.sh/blog/uv
[^willison-openai-astral]: Simon Willison: Thoughts on OpenAI acquiring Astral — https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
[^pep703-sc]: Python Steering Council notice about PEP 703 — https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
