---
type: OSS Project
title: PyPI (Python Package Index) security posture
description: "Python's package registry, run by the PSF; a trusted-publishing pioneer that still took a major hit in the TeamPCP LiteLLM compromise (Mar 2026) and responded with stricter release-immutability rules; stable but under-funded."
resource: https://pypi.org
tags: [supply-chain, package-registry, python, trusted-publishing, psf]
domain: security-sustainability
license: Apache-2.0
license_history: ["Apache-2.0 (Warehouse codebase)"]
governance: foundation
steward: Python Software Foundation
backing_orgs: [organizations/python-software-foundation]
metrics:
  litellm_daily_downloads: { value: 3400000, as_of: 2026-03-24 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pypi-blog
    resource: https://blog.pypi.org/
    title: PyPI blog (2025-2026 posts)
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: How a poisoned security scanner became the key to backdooring LiteLLM"
  - id: csa-mini
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-mini-shai-hulud-npm-supply-chain-20260516/
    title: "CSA research note: Mini Shai-Hulud (May 2026)"
  - id: openssf-registries
    resource: https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
    title: "OpenSSF: Enterprise commitment to sustainable package registries"
  - id: psf-nsf
    resource: https://pyfound.blogspot.com/2025/10/NSF-funding-statement.html
    title: "PSF News: The PSF has withdrawn a $1.5 million proposal to US government grant program (2025-10-27)"
    author: org:python-software-foundation
  - id: reg-psf-nsf
    resource: https://www.theregister.com/2025/10/27/python_foundation_abandons_15m_nsf/
    title: "The Register: Python Foundation rejects $1.5M grant with no-DEI strings (2025-10-27)"
    author: org:the-register
  - id: tns-donor-surge
    resource: https://thenewstack.io/psf-gets-a-donor-surge-after-rejecting-anti-dei-federal-grant/
    title: "The New Stack: PSF gets a donor surge after rejecting anti-DEI federal grant"
  - id: hns-anthropic
    resource: https://www.helpnetsecurity.com/2026/01/14/anthropic-python-software-foundation-1-5-million-funding/
    title: "Help Net Security: Anthropic backs Python Software Foundation security work with $1.5 million (2026-01-14)"
  - id: pypi-litellm-report
    resource: https://blog.pypi.org/
    title: "PyPI blog: incident report on litellm/telnyx supply-chain attacks (2026-04-02); file hosting outages (2026-09-08); support specialist (2026-01-26)"
---
# Summary
PyPI came out of the last two years in better shape than npm, but it was not untouched. Verdict: **stable**. The worst incident was in March 2026. TeamPCP used credentials stolen from LiteLLM's CI (through a poisoned Trivy scanner) to publish backdoored LiteLLM 1.82.7/1.82.8. LiteLLM gets about 3.4M downloads a day, and PyPI quarantined the bad versions after about 3 hours.[^snyk-litellm] In the May 2026 Mini Shai-Hulud wave, 172 packages across npm *and* PyPI were compromised within 48 hours.[^csa-mini] PyPI responded with stricter rules, for example rejecting new files uploaded to releases older than 14 days (July 2026).[^pypi-blog] Funding is still a structural weakness.[^openssf-registries]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-27 | PSF withdraws $1.5M NSF grant application over anti-DEI terms[^psf-nsf][^reg-psf-nsf] | Business | − |
| W12 | 2025-12-31 | PyPI year-in-review highlights security hardening and org features[^pypi-blog] | OSS | + |
| W9 | 2026-01-14 | Anthropic commits $1.5M over two years to PSF (PyPI/CPython security)[^hns-anthropic] | Business | + |
| W9 | 2026-01-26 | PyPI hires first Support Specialist; 1M+ users, 700k+ projects[^pypi-litellm-report] | OSS | + |
| W9 | 2026-03-24 | LiteLLM 1.82.7/1.82.8 backdoored on PyPI by TeamPCP; quarantined ~3h later; PyPI incident report 2026-04-02[^snyk-litellm][^pypi-litellm-report] | OSS | − |
| W6 | 2026-05-11/12 | Mini Shai-Hulud wave spans npm and PyPI (172 packages)[^csa-mini] | OSS | − |
| W3 | 2026-07-22 | PyPI rejects new files on releases older than 14 days[^pypi-blog] | OSS | + |
| W3 | 2026-08 | Two weeks of intermittent 502/503 download errors (cache node / Fastly config; resolved 08-28)[^pypi-litellm-report] | OSS | − |
| W3 | 2026-09-16 | PyPI named in enterprise registry-sustainability commitment[^openssf-registries] | Business | + |

# OSS successes
- Trusted publishing and attestations are well established. Release-immutability rules (the 14-day upload cutoff) close off the "poison an old release" attack.[^pypi-blog]
- PyPI responded quickly to LiteLLM, quarantining it about 3 hours after publication.[^snyk-litellm]
- A dedicated PyPI support specialist was hired on 2026-01-26 to work through account-recovery and PEP 541 backlogs.[^pypi-litellm-report]

# OSS failures / risks
- Credentials stolen from CI (the Trivy → LiteLLM chain) let attackers publish with valid credentials that passed all integrity checks.[^snyk-litellm]
- AI/LLM tooling packages are now prime targets because of what sits on developer machines (API keys for model providers).[^csa-mini]

# Business successes
- Donors stepped in after the NSF withdrawal, including the two-year $1.5M commitment from Anthropic and 295 new $99/year Supporting Members (more than $157k raised) within about two weeks.[^hns-anthropic][^tns-donor-surge]

# Business failures / risks
- Registries typically run with teams of 2–3 people. Download volumes grow 30–50% a year while funding stays flat.[^openssf-registries]

# By window
## W3
- 14-day upload cutoff[^pypi-blog]. PyPI was named in the enterprise registry-funding pledge.[^openssf-registries]
## W6
- Mini Shai-Hulud crossed over into PyPI.[^csa-mini]
## W9
- LiteLLM compromise[^snyk-litellm]. Anthropic committed $1.5M to the PSF.[^hns-anthropic]
## W12
- PSF turned down the NSF grant.[^psf-nsf]
## W24
- No notable PyPI-specific events verified in this research pass.

# Lessons
- A registry is only as secure as its most-privileged publisher's CI. If you pin security scanners in CI, pin them by digest.
- Mission-aligned donors can step in when government money comes with strings attached.

# Related
- [TeamPCP Trivy/LiteLLM campaign](/events/2026-03-teampcp-trivy-litellm-compromise.md), [PSF NSF grant](/events/2025-10-psf-withdraws-nsf-grant.md), [Python Software Foundation](/organizations/python-software-foundation.md), [Trivy](/projects/security-sustainability/trivy.md)

[^pypi-blog]: PyPI blog.
[^snyk-litellm]: Snyk blog.
[^csa-mini]: Cloud Security Alliance research note, 2026-05-16.
[^openssf-registries]: OpenSSF blog, 2026-09-16.
[^psf-nsf]: PSF News, 2025-10-27.
[^reg-psf-nsf]: The Register, 2025-10-27.
[^tns-donor-surge]: The New Stack, Nov 2025.
[^hns-anthropic]: Help Net Security, 2026-01-14.
[^pypi-litellm-report]: PyPI blog posts, 2026.
