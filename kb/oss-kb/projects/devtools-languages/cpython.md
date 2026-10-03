---
type: OSS Project
title: CPython (Python)
description: The reference Python implementation, stewarded by the Python Software Foundation; technically thriving (free-threading officially supported in 3.14, lazy imports and faster JIT in 3.15) while the PSF navigated a funding squeeze, rejecting a $1.5M NSF grant over anti-DEI terms and then receiving $1.5M from Anthropic.
resource: https://github.com/python/cpython
tags: [programming-language, python, foundation-hosted, psf, free-threading]
domain: devtools-languages
license: PSF-2.0
license_history: ["PSF License (2001-)"]
governance: foundation
steward: Python Software Foundation
backing_orgs: [organizations/python-software-foundation]
metrics:
  github_stars: { value: 77392, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cpython-gh
    resource: https://github.com/python/cpython
    title: CPython GitHub repository (stars via GitHub API, 2026-10-03)
  - id: whatsnew-314
    resource: https://docs.python.org/3/whatsnew/3.14.html
    title: What's new in Python 3.14
    author: org:python-software-foundation
  - id: pep779
    resource: https://pydevtools.com/handbook/explanation/what-is-pep-779/
    title: "pydevtools: What is PEP 779? (criteria for supported free-threaded Python)"
  - id: pep779-primary
    resource: https://peps.python.org/pep-0779/
    title: "PEP 779: Criteria for supported status for free-threaded Python (accepted 2025-06-16)"
  - id: pep810-primary
    resource: https://peps.python.org/pep-0810/
    title: "PEP 810: Explicit lazy imports (accepted 2025-11-03, Python 3.15)"
  - id: cpython-tags
    resource: https://github.com/python/cpython/tags
    title: "CPython tags (v3.15.0rc3 present, v3.15.0 not yet tagged as of 2026-10-03; via GitHub API)"
  - id: psf-durbin
    resource: https://pyfound.blogspot.com/2026/01/ee-departing-the-psf-staff.html
    title: "PSF News: Departing the PSF staff (Ee Durbin, Director of Infrastructure, Jan 2026)"
    author: org:python-software-foundation
  - id: psf-strategy
    resource: https://pyfound.blogspot.com/2026/09/announcing-psf-strategic-plan-2026.html
    title: "PSF News: Announcing the PSF Strategic Plan 2026 (2026-09-15)"
    author: org:python-software-foundation
  - id: pep790-commit
    resource: https://github.com/python/peps/pull/5160
    title: "python/peps #5160: PEP 790 — Add extra 3.15 rc3 and postpone 3.15.0 final (merged 2026-10-02)"
  - id: pep790
    resource: https://peps.python.org/pep-0790/
    title: "PEP 790: Python 3.15 Release Schedule"
  - id: pep810
    resource: https://pydevtools.com/handbook/explanation/what-is-pep-810/
    title: "pydevtools: What is PEP 810? (explicit lazy imports)"
  - id: jetbrains-lazy
    resource: https://blog.jetbrains.com/pycharm/2026/06/explicit-lazy-imports-are-coming-to-python-3-15/
    title: "JetBrains: Explicit Lazy Imports Are Coming to Python 3.15"
  - id: reg-nsf
    resource: https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
    title: "The Register: Python Foundation rejects $1.5M grant with no-DEI strings"
  - id: psf-anthropic
    resource: https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html
    title: "PSF News: Anthropic invests $1.5 million in the Python Software Foundation and open source security"
    author: org:python-software-foundation
  - id: phoronix-314
    resource: https://www.phoronix.com/news/Python-3.14
    title: "Phoronix: Python 3.14 Released With Performance Improvements, Free-Threading & Zstd"
---

# Summary
Python's language and runtime had their most ambitious two years in a decade. Python 3.14 (released 2025-10-07) made the free-threaded (no-GIL) build **officially supported** under PEP 779, and 3.15 — rc3 on 2026-10-02, final scheduled for 2026-10-09 — adds PEP 810 explicit `lazy import` (accepted unanimously 2025-11-03) and a faster JIT.[^whatsnew-314][^pep779-primary][^pep790][^pep810-primary] On the institutional side, the PSF (budget ~$5M, 14 staff) unanimously withdrew a $1.5M NSF security grant in October 2025 because it required disavowing DEI programs organisation-wide; Anthropic then committed $1.5M over two years for PyPI/CPython security in Dec 2025/Jan 2026.[^reg-nsf][^psf-anthropic] Python tooling, meanwhile, was reshaped by Astral's uv/Ruff — now owned by OpenAI. Verdict: OSS thriving; institutional funding fragile but rescued by AI-company philanthropy.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-16 | PEP 779 accepted: free-threaded Python moves to "supported" [^pep779-primary] | OSS | + |
| W12 | 2025-10-07 | Python 3.14 released (free-threading supported, zstd, etc.) [^whatsnew-314][^phoronix-314] | OSS | + |
| W12 | 2025-10-27 | PSF withdraws $1.5M NSF grant proposal over anti-DEI clause [^reg-nsf] | Business | mixed |
| W12 | 2025-11-03 | PEP 810 (explicit lazy imports) accepted for 3.15 [^pep810-primary] | OSS | + |
| W12/W9 | 2025-12 / 2026-01 | Anthropic commits $1.5M to PSF security and core programs [^psf-anthropic] | Business | + |
| W9 | 2026-01 | Ee Durbin, PSF Director of Infrastructure (PyPI ops), departs staff [^psf-durbin] | Business | − |
| W6 | 2026-05-07 | Python 3.15 beta 1 [^pep790][^cpython-tags] | OSS | + |
| W3 | 2026-08-04 → 2026-10-02 | 3.15 rc1, rc2, rc3 tagged; final scheduled 2026-10-09 (not yet released as of 2026-10-03) [^pep790][^cpython-tags] | OSS | + |
| W3 | 2026-09-15 | PSF publishes Strategic Plan 2026–2031 (adopted by board 2026-07-08) [^psf-strategy] | Business | + |

# OSS successes
- Free-threading graduated from experiment; per PEP 779 the single-thread penalty was ~10% (~3% on macOS) against a 15% ceiling for supported status.[^pep779-primary]
- Lazy imports promise large startup-time reductions (PEP 810 cites 50–70% for CLIs) for CLIs and large apps.[^pep810-primary][^jetbrains-lazy]

# OSS failures / risks
- Free-threading is opt-in, and C-extension ecosystem compatibility is still catching up.[^pep779]
- 3.15 final postponed to 2026-10-09 with an extra rc3 added (PEP 790 change merged 2026-10-02).[^pep790][^pep790-commit]

# Business successes
- PSF secured $1.5M from Anthropic, matching the forgone NSF amount, aimed at proactive PyPI malware review.[^psf-anthropic]

# Business failures / risks
- The PSF's small budget makes it dependent on a few large donors; public funding became politically conditional.[^reg-nsf]

# By window
## W3
- 3.15 release candidates (rc3 on 2026-10-02); final scheduled 2026-10-09.[^pep790][^cpython-tags]
- PSF Strategic Plan 2026 published (2026-09-15).[^psf-strategy]
## W6
- 3.15 beta 1 (2026-05-07) with lazy imports and JIT improvements.[^pep790][^jetbrains-lazy]
## W9
- Anthropic grant publicised (Jan 2026); PSF infrastructure director Ee Durbin departs.[^psf-anthropic][^psf-durbin]
## W12
- Python 3.14 GA; PSF rejects NSF grant; PEP 810 accepted.[^whatsnew-314][^reg-nsf][^pep810-primary]
## W24
- PEP 779 acceptance (June 2025).[^pep779-primary]

# Lessons
- Long-horizon technical bets (removing the GIL) can land when funded by large corporate contributors (Meta, Microsoft engineers) through a neutral foundation.
- Foundations with values-based missions face real trade-offs between government money and independence; AI companies are emerging as replacement funders.

# Related
- [Python Software Foundation](/organizations/python-software-foundation.md)
- [PSF withdraws NSF grant](/events/2025-10-psf-withdraws-nsf-grant.md)
- [uv / Ruff / ty](/projects/devtools-languages/uv.md)

[^cpython-gh]: CPython GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/python/cpython
[^whatsnew-314]: What's new in Python 3.14 — https://docs.python.org/3/whatsnew/3.14.html
[^pep779]: pydevtools: What is PEP 779? (criteria for supported free-threaded Python) — https://pydevtools.com/handbook/explanation/what-is-pep-779/
[^pep779-primary]: PEP 779 — https://peps.python.org/pep-0779/
[^pep810-primary]: PEP 810 — https://peps.python.org/pep-0810/
[^cpython-tags]: CPython tags — https://github.com/python/cpython/tags
[^psf-durbin]: PSF News: Departing the PSF staff — https://pyfound.blogspot.com/2026/01/ee-departing-the-psf-staff.html
[^psf-strategy]: PSF News: Announcing the PSF Strategic Plan 2026 — https://pyfound.blogspot.com/2026/09/announcing-psf-strategic-plan-2026.html
[^pep790-commit]: python/peps #5160 — https://github.com/python/peps/pull/5160
[^pep790]: PEP 790: Python 3.15 Release Schedule — https://peps.python.org/pep-0790/
[^pep810]: pydevtools: What is PEP 810? (explicit lazy imports) — https://pydevtools.com/handbook/explanation/what-is-pep-810/
[^jetbrains-lazy]: JetBrains: Explicit Lazy Imports Are Coming to Python 3.15 — https://blog.jetbrains.com/pycharm/2026/06/explicit-lazy-imports-are-coming-to-python-3-15/
[^reg-nsf]: The Register: Python Foundation rejects $1.5M grant with no-DEI strings — https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
[^psf-anthropic]: PSF News: Anthropic invests $1.5 million in the Python Software Foundation and open source security — https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html
[^phoronix-314]: Phoronix: Python 3.14 Released With Performance Improvements, Free-Threading & Zstd — https://www.phoronix.com/news/Python-3.14
