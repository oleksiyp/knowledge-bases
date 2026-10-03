---
type: Organization
title: Python Software Foundation
description: "Nonprofit steward of Python and PyPI; withdrew a $1.5M NSF grant over anti-DEI terms (Oct 2025) and was backfilled by community members and a $1.5M Anthropic donation (Jan 2026)."
resource: https://www.python.org/psf/
tags: [foundation, python, pypi, funding]
org_kind: foundation
hq: Beaverton, OR, USA
funding: { total_usd: "n/a (nonprofit)", last_round: "Anthropic donation $1.5M", last_round_date: 2026-01, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/security-sustainability/pypi]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-psf
    resource: https://en.wikipedia.org/wiki/Python_Software_Foundation
    title: "Wikipedia: Python Software Foundation"
  - id: pypi-blog
    resource: https://blog.pypi.org/
    title: PyPI blog
  - id: reg-nsf
    resource: https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
    title: "The Register: Python Foundation rejects $1.5M grant with no-DEI strings"
  - id: psf-anthropic
    resource: https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html
    title: "PSF News: Anthropic invests $1.5 million in the PSF and open source security"
  - id: whatsnew-314
    resource: https://docs.python.org/3/whatsnew/3.14.html
    title: What's new in Python 3.14
  - id: pep790
    resource: https://peps.python.org/pep-0790/
    title: "PEP 790: Python 3.15 Release Schedule"
---
# Summary
The PSF runs PyPI and Python's community infrastructure. On **2025-10-27** it withdrew a $1.5M NSF grant application because the terms required it to refrain from DEI activities. Within two weeks 295 new paying members joined, and in **January 2026 Anthropic donated $1.5M**, matching the declined grant.[^wiki-psf] PyPI security work continued: 14-day release-immutability rules (Jul 2026) and a dedicated support specialist (Jan 2026).[^pypi-blog]

# Business timeline
| Date | Event |
|---|---|
| 2025-10-27 | Withdraws $1.5M NSF application[^wiki-psf] |
| 2025-11 | 295 new supporting members in two weeks[^wiki-psf] |
| 2026-01 | Anthropic donates $1.5M[^wiki-psf] |
| 2026-01-26 | PyPI support specialist role[^pypi-blog] |

# Monetization model
Donations, sponsorships, PyCon US revenue, grants and memberships.

# Successes
- Held to its values and was rewarded by donors.[^wiki-psf]

# Failures / risks
- Relies on a few large sponsors. Public-grant funding in the US is politically constrained.

# Related
- [PyPI](/projects/security-sustainability/pypi.md), [PSF withdraws NSF grant](/events/2025-10-psf-withdraws-nsf-grant.md)

[^wiki-psf]: Wikipedia.
[^pypi-blog]: PyPI blog.

## Additional notes (devtools-languages)
- Budget context: The Register reported a PSF budget of roughly $5M and 14 staff at the time of the NSF withdrawal; the board vote was unanimous and the NSF terms included clawback of already-spent funds.[^reg-nsf]
- Anthropic's commitment is framed as a two-year partnership covering proactive automated review of PyPI uploads plus core programs (Developer-in-Residence, grants, infrastructure).[^psf-anthropic]
- Language stewardship in the period: Python 3.14 (2025-10-07) made free-threaded CPython officially supported (PEP 779); Python 3.15 reached rc3 on 2026-10-02 with final scheduled for 2026-10-09, adding PEP 810 lazy imports.[^whatsnew-314][^pep790]
- Related: [CPython](/projects/devtools-languages/cpython.md), [uv / Ruff / ty](/projects/devtools-languages/uv.md)

[^reg-nsf]: The Register — https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
[^psf-anthropic]: PSF News — https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html
[^whatsnew-314]: What's new in Python 3.14 — https://docs.python.org/3/whatsnew/3.14.html
[^pep790]: PEP 790 — https://peps.python.org/pep-0790/
